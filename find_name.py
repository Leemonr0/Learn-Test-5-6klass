with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

lines_with_name = [(i+1, l.strip()) for i, l in enumerate(content.splitlines())
                   if 'Sviatoslav' in l or 'Zhurbytskyi' in l]
for ln, text in lines_with_name:
    print(f"Line {ln}: {text[:120]}")
