/**
 * Created by zhaoyi on 2016/1/19.
 */
module.exports = function(grunt){

    //配置信息:
    grunt.initConfig({

        pkg:grunt.file.readJSON('package.json'),//意思是把grunt.js文件盒package.json文件关联到一起;

        concat:{//concat:需要做什么任务;

            webQQ:{//webQQ:任务名称;

                files:{//files:固定的名称,指的是文件

                    'dist/main.js':['main.js','drag.js','scale.js','range.js']//意思是把main.js,drag.js,scale.js,range,js合并到新建的文件夹dist下面并且新建一个为main.js的文件;

                }

            }

        },
        uglify:{
            webQQ:{
                files:{
                    'dist/main.min.js':'dist/main.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');//加载这个插件;
    grunt.loadNpmTasks('grunt-contrib-uglify');//加载这个插件;

    grunt.registerTask('default',['concat','uglify']);//注册一个concat的任务,
}













