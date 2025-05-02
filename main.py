from openai import OpenAI

client = OpenAI(api_key="sk-ccef741bf3b845f48c0d94c05fd84604", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are anba player"},
        {"role": "user", "content": "how is the best shooter history?"},
    ],
    stream=False
)

print(response.choices[0].message.content)


