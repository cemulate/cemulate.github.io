import os, re
from glob import glob

for dir in glob('_solutions*'):
    for doc in glob(os.path.join(dir, '*.md')):
        if os.path.basename(doc) == 'index.md':
            continue
        contents = open(doc, 'r').readlines()

        outlines = []
        for line in contents:
            if line.startswith('order'):
                continue
            outlines.append(line.strip())
            m = re.match(r'exercise: (.+)$', line)
            if m is not None:
                parts = m.group(1).split('.')
                n = sum(int(d) * 100**(len(parts) - 1 - i) if d != 'standalone' else 0 for (i, d) in enumerate(parts))
                outlines.append('order: ' + str(n))

        open(doc, 'w').write('\n'.join(outlines))
