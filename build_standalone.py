with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace css link with inline style
html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>\n{css}\n</style>')
# Replace script src with inline script
html = html.replace('<script src="app.js"></script>', f'<script>\n{js}\n</script>')

with open('standalone.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Generated standalone.html successfully")
