const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('D:/AUTOCLAW工作目录/personality-game/js/questions.js', 'utf8');
const context = vm.createContext({QUESTIONS: undefined});
vm.runInContext(code, context);
const QUESTIONS = context.QUESTIONS;

// 验证第3题：陌生聚会
const q3 = QUESTIONS[2];
console.log('=== Q3: 陌生聚会 ===');
q3.options.forEach(o => {
  console.log(`  ${String(o.text).substring(0,25).padEnd(28)} red:${String(o.scores.red).padEnd(3)} yellow:${o.scores.yellow}`);
});
console.log('');
console.log('验证：社交型反应(搭话)应该红色高分，果断型(自我介绍)应该黄色高分');

// 验证第6题：项目出问题
const q6 = QUESTIONS[5];
console.log('\n=== Q6: 项目出问题 ===');
q6.options.forEach(o => {
  console.log(`  ${String(o.text).substring(0,25).padEnd(28)} red:${String(o.scores.red).padEnd(3)} yellow:${o.scores.yellow}`);
});
console.log('');
console.log('验证：召集大家(社交)应该红色高分，拍板(果断)应该黄色高分');

// 全局检查无RED_TEMP残留
const fullCode = fs.readFileSync('D:/AUTOCLAW工作目录/personality-game/js/questions.js', 'utf8');
if (fullCode.includes('RED_TEMP')) {
  console.log('\n⚠️ 警告：文件中仍有RED_TEMP残留！');
} else {
  console.log('\n✅ 无RED_TEMP残留');
}
