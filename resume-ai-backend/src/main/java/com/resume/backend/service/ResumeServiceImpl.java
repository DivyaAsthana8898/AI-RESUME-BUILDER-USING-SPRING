package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription)
            throws IOException {

        // Load resume_prompt.txt safely from classpath.
        // This works both locally and inside the Spring Boot JAR on Render.
        String promptString = loadPromptFromFile("resume_prompt.txt");

        // Replace {{userDescription}} in the prompt template
        String promptContent = putValuesToTemplate(
                promptString,
                Map.of("userDescription", userResumeDescription)
        );

        // Create prompt
        Prompt prompt = new Prompt(promptContent);

        // Call AI model
        String response = chatClient
                .prompt(prompt)
                .call()
                .content();

        // Parse AI response
        return parseMultipleResponses(response);
    }

    /**
     * Loads a file from src/main/resources.
     *
     * IMPORTANT:
     * Do not use resource.getFile() here because it fails
     * when the application is running from a packaged JAR.
     */
    String loadPromptFromFile(String filename) throws IOException {

        ClassPathResource resource = new ClassPathResource(filename);

        try (var inputStream = resource.getInputStream()) {

            return new String(
                    inputStream.readAllBytes(),
                    StandardCharsets.UTF_8
            );
        }
    }

    /**
     * Replaces template placeholders with actual values.
     *
     * Example:
     * {{userDescription}}
     * becomes the user's resume description.
     */
    String putValuesToTemplate(
            String template,
            Map<String, String> values
    ) {

        for (Map.Entry<String, String> entry : values.entrySet()) {

            template = template.replace(
                    "{{" + entry.getKey() + "}}",
                    entry.getValue()
            );
        }

        return template;
    }

    /**
     * Parses the AI response.
     *
     * Expected response can contain:
     *
     * <think>
     * ...
     * </think>
     *
     * ```json
     * {
     *   ...
     * }
     * ```
     */
    public static Map<String, Object> parseMultipleResponses(
            String response
    ) {

        Map<String, Object> jsonResponse = new HashMap<>();

        if (response == null || response.isBlank()) {
            jsonResponse.put("think", null);
            jsonResponse.put("data", null);
            return jsonResponse;
        }

        // -----------------------------------------
        // Extract <think>...</think>
        // -----------------------------------------

        int thinkStartIndex = response.indexOf("<think>");
        int thinkEndIndex = response.indexOf("</think>");

        if (thinkStartIndex != -1
                && thinkEndIndex != -1
                && thinkStartIndex < thinkEndIndex) {

            String thinkContent = response.substring(
                    thinkStartIndex + "<think>".length(),
                    thinkEndIndex
            ).trim();

            jsonResponse.put("think", thinkContent);

        } else {

            jsonResponse.put("think", null);
        }

        // -----------------------------------------
        // Extract ```json ... ```
        // -----------------------------------------

        int jsonStartIndex = response.indexOf("```json");
        int jsonEndIndex = response.lastIndexOf("```");

        if (jsonStartIndex != -1
                && jsonEndIndex != -1
                && jsonStartIndex < jsonEndIndex) {

            String jsonContent = response.substring(
                    jsonStartIndex + "```json".length(),
                    jsonEndIndex
            ).trim();

            try {

                ObjectMapper objectMapper = new ObjectMapper();

                Map<String, Object> dataContent =
                        objectMapper.readValue(
                                jsonContent,
                                Map.class
                        );

                jsonResponse.put("data", dataContent);

            } catch (Exception e) {

                jsonResponse.put("data", null);

                System.err.println(
                        "Invalid JSON format in AI response: "
                                + e.getMessage()
                );
            }

        } else {

            // -----------------------------------------
            // Fallback:
            // Try to find normal JSON without ```json
            // -----------------------------------------

            int firstBrace = response.indexOf("{");
            int lastBrace = response.lastIndexOf("}");

            if (firstBrace != -1
                    && lastBrace != -1
                    && firstBrace < lastBrace) {

                String jsonContent = response.substring(
                        firstBrace,
                        lastBrace + 1
                ).trim();

                try {

                    ObjectMapper objectMapper = new ObjectMapper();

                    Map<String, Object> dataContent =
                            objectMapper.readValue(
                                    jsonContent,
                                    Map.class
                            );

                    jsonResponse.put("data", dataContent);

                } catch (Exception e) {

                    jsonResponse.put("data", null);

                    System.err.println(
                            "Unable to parse JSON from AI response: "
                                    + e.getMessage()
                    );
                }

            } else {

                jsonResponse.put("data", null);
            }
        }

        return jsonResponse;
    }
}


