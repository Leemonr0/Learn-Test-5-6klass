with open('standalone.html', 'r', encoding='utf-8') as f:
    s = f.read()

checks = {
    'inputmode="decimal"': s.count('inputmode="decimal"'),
    'confettiCanvas': s.count('confettiCanvas'),
    'triggerConfetti': s.count('triggerConfetti'),
    'toggleTopicAccordion': s.count('toggleTopicAccordion'),
    'toggleAllAccordions': s.count('toggleAllAccordions'),
    'headerProgressBar': s.count('headerProgressBar'),
    'headerBottomProgressFill': s.count('headerBottomProgressFill'),
    'input-correct': s.count('input-correct'),
    'input-incorrect': s.count('input-incorrect'),
    'inputShake': s.count('inputShake'),
    '360px': s.count('360px'),
    '767px': s.count('767px'),
    '768px': s.count('768px'),
    '1024px': s.count('1024px'),
    '1440px': s.count('1440px'),
    'Срочно подтянуть (Красные)': s.count('Срочно подтянуть (Красные)'),
    'Закрепить (Желтые)': s.count('Закрепить (Желтые)'),
    'Только задачи': s.count('Только задачи'),
    'Свернуть все': s.count('Свернуть все')
}

all_ok = True
for k, count in checks.items():
    status = 'OK' if count > 0 else 'FAIL'
    if count == 0: all_ok = False
    print(f'[{status}] {k}: {count}x')

print('\nTotal size:', len(s), 'bytes')
assert all_ok, 'Some checks failed!'
print('ALL VERIFICATIONS PASSED!')
