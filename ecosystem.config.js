module.exports = {
  apps: [
    {
      name: "admin-pannel", //نام پروژه که در فایل package.json هم وجود دارد
      script: "npm",
      args: "run start",
      interpreter: "cmd.exe",
      env: {
        NODE_ENV: "production",
        PORT: 3001, // or the port your app is running on   ما به پورت 3000 اینجا کاری نداریم و تغییری نمیدهیم
      },
    },
  ],
};
