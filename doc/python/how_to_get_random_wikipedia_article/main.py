import wikipedia

wikipedia.set_lang("ja")

page = wikipedia.random()
summary = wikipedia.summary(page)
link = "https://ja.wikipedia.org/wiki/" + page

print(f"今日の Wikipedia\n {page}\n {summary}\n {link}")
