(async () => {
    const { Sequelize } = require('sequelize')

    const sequelize = new Sequelize('bytedance', 'root', 'example', {
        host: "localhost",
        dialect: "mysql", // 一定要写
        // operatorsAliases: false
    })

    // 定义模型
    const Fruit = sequelize.define("Fruit", {
        name: { type: Sequelize.STRING(20), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 }
    })
    console.log(Fruit.create)
    let ret = await Fruit.sync()
    console.log(Fruit.create)
    await Fruit.create({
        name: "apple",
        price: 10
    })

    await Fruit.sync()
    


})()

