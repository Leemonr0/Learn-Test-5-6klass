with open('standalone.html', 'r', encoding='utf-8') as f:
    s = f.read()

name_found = 'Sviatoslav' in s or 'Zhurbytskyi' in s
print('Name removed:', not name_found)

old_classes = ['formula-highlight', 'visual-aid-box', 'block-box', 'card-title-group', 'filter-tab ', 'quick-nav-link']
for o in old_classes:
    c = s.count(o)
    print(f'Old class "{o}": {c}x (should be 0 or only in comments)')
