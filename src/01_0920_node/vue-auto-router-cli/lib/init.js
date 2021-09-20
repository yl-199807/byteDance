const {promisify} = require('util')
const clear = require('clear')
const figlet = promisify(require('figlet'))
const {clone} = require('./download')
const fs = require('fs')

const spawn = async(...args) => {
    // 同步 Promise api
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        // 输出流 子进程 合并到 主进程
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        process.on('close', () => {
            resolve();
        })
    })
}

module.exports = async name => {
    // 打印欢迎界面
    clear()
    // npmjs.com/package/figlet 可以查看API配置更多属性
    const data = await figlet('Byte YYDS')
    console.log(data)

    // 项目模板
//     console.log('创建项目'+name)
//     await clone('github:su37josephxia/vue-template',name,{ clone: true },function (err) {
//         console.log(err ? 'Error' : 'Success')
//     })
//     //======= 无进度条，待解决
//
//     // 下载依赖 npm i
//     // 子进程
//     console.log('安装依赖。。。')
//     await spawn('npm', ['install'], {cwd: `./${name}`})
//
//     console.log(`
// 初始化完成！
// =======================
// 运行npm run serve开始开发
//     `)


}
