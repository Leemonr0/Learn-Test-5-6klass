with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('class="formula-highlight"', 'class="formula"')
content = content.replace('class="warning-callout"', 'class="warn-callout"')
content = content.replace('class="visual-aid-box"', 'class="visual-aid"')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done:", content.count('class="formula"'), "formula,",
      content.count('class="warn-callout"'), "warn-callout")
