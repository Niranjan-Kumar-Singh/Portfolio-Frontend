import { exec } from 'child_process';
import fs from 'fs';

exec('npx vite build', (error, stdout, stderr) => {
    fs.writeFileSync('build_output.txt', "OUT:\n" + stdout + '\nERR:\n' + stderr);
});
