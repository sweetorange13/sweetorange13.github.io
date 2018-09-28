/* ---- particles.js config ---- */

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 50, //粒子数量
			"density": {
				"enable": true,
				"value_area": 800 //区域散布密度大小（数值越小越密集）
			}
		},
		"color": {
			"value": "#ffffff" //粒子颜色
		},
		"shape": {
			"type": ["circle", "triangle"], //粒子形状（可以指定多个，还可以指定图片）
			"stroke": {
				"width": 0, //粒子的描边宽度
				"color": "#000000" //粒子描边颜色
			},
			"polygon": {
				"nb_sides": 6 //polygon边数
			},
			"image": {
				"src": "img/github.svg", //粒子指定的图片地址
				"width": 100, //图片宽度
				"height": 100 //图片高度
			}
		},
		"opacity": {
			"value": 0.5, //粒子不透明度最大值
			"random": false, //随机不透明度开关（会在0到最大值之间随机）
			"anim": {
				"enable": false, //是否开启不透明度动画（开启之后，下边的参数才会起作用）
				"speed": 1, //动画速度
				"opacity_min": 0.1, //最低不透明度
				"sync": false //各个粒子的动画效果是否保持同步
			}
		},
		"size": {
			"value": 3, //粒子大小最大值
			"random": true, //是否随机大小（会在0到最大值之间随机）
			"anim": {
				"enable": false, //是否开启尺寸变换动画
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true, //粒子连线是否开启
			"distance": 150, //连线距离
			"color": "#ffffff", //连线颜色
			"opacity": 0.4, //连线不透明度
			"width": 1 //连线宽度
		},
		"move": {
			"enable": true, //粒子是否移动
			"speed": 6, //移动速度
			"direction": "none", //粒子整体移动方向（大方向）
			"random": false, //随机方向是否开启
			"straight": false, //是否直线移动
			"out_mode": "out", //是否移出画布（out/bounce 如果选择bounce，则遇到边界会反弹）
			"bounce": false,
			"attract": {
				"enable": false, //是否允许粒子互相吸引开关
				"rotateX": 600, //引力的x轴作用范围
				"rotateY": 1200 //引力的y轴作用范围
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true, //鼠标悬浮事件是否开启
				"mode": "grab" //事件类型（抓取相近的）["grab", "bubble"泡沫球 ,"repulse"击退效果]
			},
			"onclick": {
				"enable": true, //鼠标点击事件是否开启
				"mode": "push" //事件类型（击退）
			},
			"resize": true //粒子与互动参数设置开关（选择开启之后，下边的modes参数对象才能生效）
		},
		"modes": {
			"grab": {
				"distance": 140, //临近抓取的距离
				"line_linked": {
					"opacity": 1 //连线不透明度
				}
			},
			"bubble": {
				"distance": 400, //抓取泡沫球之间的距离
				"size": 40, //泡沫球的大小
				"duration": 2, //抓取效果的持续时间
				"opacity": 0.8,
				"speed": 3
			},
			"repulse": {
				"distance": 200, //击退效果产生的范围
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4 //粒子推出的数量
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

/* 输出文字 */
var str = '<p>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;走在东北边陲呼兰河镇上的灰扑扑的街道两旁，我穿越时空隧道再次遇见了，街道上的灰扑扑的人们。我遇到了有二伯，那个从来不知姓名的有二伯，是萧红祖父家的长工。从来到祖父家，人们便“有子、大有子、小有子、有二伯”的称呼他，没有人知道他姓甚名谁，也没人关心。有二伯没有固定住所，今天住在房架子随时会倒下来的粉房里，明天住在养猪那家小猪官的炕梢。他只有一床被角往外流棉花的被子。有二伯的衣服都是萧红去世祖母穿过的前清旧货，有二伯的鞋子要么没有鞋底，要么没有鞋跟。有二伯常常偷拿祖父的东西，一个酒壶，一碗大米，潮羽说寒酸得甚至比不上鲁迅笔下的阿Q。<br></p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>还遇见了那个冯歪嘴子。冯歪嘴子佝偻于磨房角落，大家曾说他至死也娶不上媳妇，生不了儿子。许是上天格外眷顾他，长着一张福气脸，垂着条乌黑辫子的大嗓门陈大姐嫁给了他，还给他生了两个儿子。磨坊角落里寒凉彻骨，自己倒可以将就些，可不能让媳妇儿子受苦。冯歪嘴子只有去求祖父，但他不好意思说，开始只是扭捏地笑，笑了好几遍，才吞吞吐吐说出自己的愿望。男人的骨气在现实面前球都不算?</p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;最最让我疼惜的还是那个小团圆媳妇，无亲无故孤苦伶仃的小团圆媳妇，12岁就成了别人家的童养媳。在婆家当牛做马不说，每天至少要挨婆婆八顿打，婆婆打碎了一只碗，丢了一根针，被狗咬了一下……，任何鸡毛蒜皮的小事，都要把小团圆媳妇拉过来打一顿。天天打，日日打，小团圆媳妇生病了，又放到滚烫的水里驱邪除魔。不久，便被折磨得悄无声息得死了。</p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;含泪走过这段故事时，以前常在我这看病的清洁工大姐正来拿药。她穿着橙色干净整洁的工作服，精神焕发。问起近况，她说工作轻松自在，这个月除了2000块钱工资，又发了100块钱奖金，这几天早上没事时就去给开早餐店的儿子帮忙。清洁工大姐是点军人，因为自家土地被占，才来到市内做了一名清洁工。扫厕所是她自己选择的，她说一天两遍厕所，扫干净了就可以干点别的事，轻松而自由。</p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;我又想起了几个刚刚中午来学校门口做生意的小商贩，他们一般11:30就骑上自己的电动三轮车，来到三中门口支起小摊。“手抓饼”、“台湾团饭”、“怪味烧饼”、“竹筒粽子”，各式各样。我喜欢静静地观察他们，发现他们戴着金项链，穿着时尚的牛仔裤，手脚麻利容光焕发。他们常常是手忙脚乱得边做着生意，边说些荤笑话，满足在每个人脸上是显而易见的。虽然城管昨天才让他们每人交了100元的罚款，可就像天空飘过一片云，在他们脸上没留下半点波澜，他们依然开心的奔波在各个学校门口，也许他们已经挣到了一套房子，也许正在挣房子的路上精神抖擞地奔波着，但他们的希望就在眼前。不像呼兰河上的有二伯，冯歪嘴子，小团圆媳妇，终其一生只为一口饭。至于一件新衣，一间陋室，那从来不在他们的梦想里，他们没有美梦可做。</p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;同样生活在最底层，只不过隔了七八十个冬去春来，今天的太阳简直温暖得不切实际。</p><p>&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;&nbsp;<wbr>&nbsp;现在，我坐在宽敞明亮的大房间里，坐在属于我的诊室，自由自在的在电脑上写下自己的喜怒哀乐。我暗暗告诫自己，从今天开始，我要快乐。</p>';
var i = 0;

function typing() {
	var divTyping = document.getElementById('divTyping');
	if (i <= str.length) {
		divTyping.innerHTML = str.slice(0, i++) + '_';
		setTimeout('typing()',50); //递归调用
	} else {
		divTyping.innerHTML = str; //结束打字,移除 _ 光标
	}
}
typing();