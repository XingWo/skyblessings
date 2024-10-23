 document.addEventListener('keydown', function(event) {
	// 检查是否按下 Enter 键
	if (event.key === 'Enter') {
		startDraw();
	}
});
window.onload = function() {
    // 导入配置
    const configData = `
      ID,获奖人/奖项,权重,上级ID,备注
	  0,backgroundimg0,53,,backgroundimg
	  0,backgroundimg1,53,,backgroundimg
	  0,backgroundimg2,53,,backgroundimg
	  9,backgroundimg3,1,,backgroundimg
      1,大吉,24,0,textimg
      11,结缘物：心火,1,1,dordas
      11,结缘物：水母,1,1,dordas
      11,结缘物：光鳐,1,1,dordas
      111,缘彩：丹色,1,11,dordascolor
      111,缘彩：杏黄,1,11,dordascolor
      111,缘彩：琥珀黄,1,11,dordascolor
      111,缘彩：麦苗绿,1,11,dordascolor
      111,缘彩：宫殿绿,1,11,dordascolor
      111,缘彩：星蓝,1,11,dordascolor
      111,缘彩：雪青,1,11,dordascolor
      111,缘彩：桃夭,1,11,dordascolor
      1111,所得皆愿，前路坦途。,1,111,blessing
      1111,百事皆宜，顺遂无忧。,1,111,blessing
      1111,和鸣有声，行路有光。,1,111,blessing
      1111,春秋小暖，夏寒常安。,1,111,blessing
      1111,鸣而不凡，青云直上。,1,111,blessing
      1111,前程共赴，千里同风。,1,111,blessing
      1111,鹏程万里，顺颂时宜。,1,111,blessing
      1111,东风满斟，万事顺遂。,1,111,blessing
      11111,宜：出游,1,1111,entry
      11111,宜：饱食,1,1111,entry
      11111,宜：扫除,1,1111,entry
      11111,宜：阅读,1,1111,entry
      11111,宜：睡觉,1,1111,entry
      11111,宜：交友,1,1111,entry
      11111,宜：相聚,1,1111,entry
      11111,宜：观影,1,1111,entry
      2,中吉,48,0,textimg
      22,结缘物：遥鲲,1,2,dordas
      22,结缘物：荧光小菇,1,2,dordas
      22,结缘物：蝴蝶,1,2,dordas
      222,缘彩：丹色,1,22,dordascolor
      222,缘彩：霁青,1,22,dordascolor
      222,缘彩：梧枝绿,1,22,dordascolor
      222,缘彩：酡颜,1,22,dordascolor
      222,缘彩：明黄,1,22,dordascolor
      222,缘彩：梅子青,1,22,dordascolor
      222,缘彩：田园绿,1,22,dordascolor
      222,缘彩：藤萝紫,1,22,dordascolor
      222,缘彩：藤黄,1,22,dordascolor
      222,缘彩：霞光红,1,22,dordascolor
      222,缘彩：鸢尾蓝,1,22,dordascolor
      2222,不期而遇，彼此奔赴。,1,222,blessing
      2222,愿你有随时启程的勇气。,1,222,blessing
      2222,尊重内心的选择。,1,222,blessing
      2222,巡此逆境，直抵繁星。,1,222,blessing
      2222,此非终点，好运伊始。,1,222,blessing
      2222,互相在意的人，不会走散。,1,222,blessing
      2222,晒晒太阳，慢慢长大。,1,222,blessing
      2222,袒露心意是最好的开始。,1,222,blessing
      2222,为想见之人，迈开脚步。,1,222,blessing
      2222,心存希冀，目有繁星。,1,222,blessing
      2222,心有所期，全力以赴。,1,222,blessing
      22222,忌：忧思,1,2222,entry
      22222,忌：铺张浪费,1,2222,entry
      22222,忌：随波逐流,1,2222,entry
      22222,忌：挨饿,1,2222,entry
      22222,忌：贪心,1,2222,entry
      22222,忌：忽视感受,1,2222,entry
      22222,忌：忽视健康,1,2222,entry
      22222,忌：灰心丧气,1,2222,entry
      22222,忌：积郁寡欢,1,2222,entry
      22222,忌：抗拒改变,1,2222,entry
      22222,忌：口是心非,1,2222,entry
      3,小吉,54,0,textimg
      33,结缘物：飞鸟,1,3,dordas
      33,结缘物：鱼,1,3,dordas
      33,结缘物：花,1,3,dordas
      333,缘彩：钴蓝,1,33,dordascolor
      333,缘彩：栀子黄,1,33,dordascolor
      333,缘彩：蛙绿,1,33,dordascolor
      333,缘彩：石绿,1,33,dordascolor
      333,缘彩：竹月,1,33,dordascolor
      333,缘彩：棟色,1,33,dordascolor
      333,缘彩：桃红,1,33,dordascolor
      333,缘彩：蔚蓝,1,33,dordascolor
      333,缘彩：蝶翅蓝,1,33,dordascolor
      333,缘彩：青矾绿,1,33,dordascolor
      333,缘彩：明茶褐,1,33,dordascolor
      333,缘彩：丁香褐,1,33,dordascolor
      333,缘彩：春梅红,1,33,dordascolor
      333,缘彩：金盏黄,1,33,dordascolor
      333,缘彩：天水碧,1,33,dordascolor
      333,缘彩：景泰蓝,1,33,dordascolor
      333,缘彩：银朱,1,33,dordascolor
      333,缘彩：苕荣,1,33,dordascolor
      3333,别担心，万事顺遂。,1,333,blessing
      3333,无需比较，你独一无二。,1,333,blessing
      3333,行至途中，勿忘风景。,1,333,blessing
      3333,寻光之旅，有人伴你身侧。,1,333,blessing
      3333,遇见本身即是浪漫。,1,333,blessing
      3333,珍贵的回忆依旧闪烁。,1,333,blessing
      3333,愿你有随时启程的勇气。,1,333,blessing
      3333,遵从内心，切勿缄默。,1,333,blessing
      3333,每次努力，都将改变未来。,1,333,blessing
      3333,互相在意的人，不会走散。,1,333,blessing
      3333,不要困于无风之地。,1,333,blessing
      3333,你所期待的会有所回应。,1,333,blessing
      3333,你同样是坚定不移的选择。,1,333,blessing
      3333,伞一直在，记得避雨。,1,333,blessing
      3333,袒露心意是最好的开始。,1,333,blessing
      3333,体会，感受，接纳爱。,1,333,blessing
      3333,无关结果，体会过程。,1,333,blessing
      3333,无关结局，珍藏记忆。,1,333,blessing
      33333,忌：忧思,1,3333,entry
      33333,忌：铺张浪费,1,3333,entry
      33333,忌：随波逐流,1,3333,entry
      33333,忌：逃避责任,1,3333,entry
      33333,忌：停滞不前,1,3333,entry
      33333,忌：投机取巧,1,3333,entry
      33333,忌：不思进取,1,3333,entry
      33333,忌：一意孤行,1,3333,entry
      33333,忌：挨饿,1,3333,entry
      33333,忌：贪心,1,3333,entry
      33333,忌：忽视感受,1,3333,entry
      33333,忌：忽视健康,1,3333,entry
      33333,忌：灰心丧气,1,3333,entry
      33333,忌：积郁寡欢,1,3333,entry
      33333,忌：抗拒改变,1,3333,entry
      33333,忌：口是心非,1,3333,entry
      5,吉,33,0,textimg
      55,结缘物：海,1,5,dordas
      55,结缘物：风,1,5,dordas
      55,结缘物：云,1,5,dordas
      555,缘彩：酡红,1,55,dordascolor
      555,缘彩：赤金,1,55,dordascolor
      555,缘彩：鹅掌黄,1,55,dordascolor
      555,缘彩：松霜绿,1,55,dordascolor
      555,缘彩：螺钿紫,1,55,dordascolor
      555,缘彩：品蓝,1,55,dordascolor
      555,缘彩：豇豆红,1,55,dordascolor
      5555,不要困于无风之地。,1,555,blessing
      5555,互相在意的人，不会走散。,1,555,blessing
      5555,坚定你自己的选择。,1,555,blessing
      5555,每次努力，都将改变未来。,1,555,blessing
      5555,愿你有随时启程的勇气。,1,555,blessing
      5555,珍贵的回忆依旧闪烁。,1,555,blessing
      5555,遵从内心，切勿缄默。,1,555,blessing
      55555,忌：忽视感受,1,5555,entry
      55555,忌：忽视健康,1,5555,entry
      55555,忌：逃避责任,1,5555,entry
      55555,忌：停滞不前,1,5555,entry
      55555,忌：不思进取,1,5555,entry
      55555,忌：一意孤行,1,5555,entry
      55555,忌：抗拒改变,1,5555,entry
      6,奇,1,9,textimg
      66,结缘物：螃蟹,1,6,dordas
      66,结缘物：冥龙,1,6,dordas
      666,缘彩：雷雨垂,1,66,dordascolor
      666,缘彩：缁色,1,66,dordascolor
      6666,安全滑行，当心磕碰。,1,666,blessing
      6666,谨慎飞行，躲避意外。,1,666,blessing
      66666,忌：勇,1,6666,entry
      66666,忌：横,1,6666,entry
    `;
	const rows = configData.trim().split('\n'); 
    rows.forEach(row => {
      const columns = row.split(',');
      if (columns.length >= 5) {
        const id = columns[0].trim();
        const name = columns[1].trim();
        const weight = parseInt(columns[2].trim(), 10);
        const parentId = columns[3].trim() || null;
        const remark = columns[4].trim() || '';
        
        if (name) {
          drawItems.push({ id, name, weight, parentId, remark });
        }
      }
    });
    startDraw(); // 自动抽奖
}

let drawItems = [];
function startDraw() {
  // 过滤出 N0 项
  const n0Items = drawItems.filter(item => !item.parentId);
  // 生成权重索引数组
  const indices = [];
  
  // 创建权重索引数组
  n0Items.forEach((item, index) => {
    for (let i = 0; i < item.weight; i++) {
      indices.push(index); // 将每个奖项的索引添加到数组中
    }
  });
  //随机洗牌，不用注释即可
    shuffleArray(indices);

  // 生成一个随机数
  const selectedItem = n0Items[indices[Math.floor(Math.random() * indices.length)]];
  if(selectedItem.remark == "backgroundimg"){
	  if (selectedItem.name == "backgroundimg0") {
	  	  $('#backgroundimg').css('-webkit-mask-image', 'url(./starimg/background0.png)');
	  }else if (selectedItem.name == "backgroundimg1") {
	  	
		  $('#backgroundimg').css('-webkit-mask-image', 'url(./starimg/background1.png)');
	  }else if (selectedItem.name == "backgroundimg2") {
	  	
		  $('#backgroundimg').css('-webkit-mask-image', 'url(./starimg/background2.png)');
	  }else if (selectedItem.name == "backgroundimg3") {
	  	
		  $('#backgroundimg').css('-webkit-mask-image', 'url(./starimg/background3.png)');
	  }
  }else{
	  drawResultses.push(selectedItem.name); // 添加抽中的 N0 项
  }
  // 递归抽取下级项
  function drawSubItems(parentId) {
    const subItems = drawItems.filter(item => item.parentId === parentId);
    
    if (subItems.length === 0) return; // 如果没有下级项，结束递归

    // 生成权重索引数组
    const subIndices = [];
    subItems.forEach((subItem, index) => {
      for (let i = 0; i < subItem.weight; i++) {
        subIndices.push(index); // 将每个下级项的索引添加到数组中
      }
    });

    // 检查是否还有可抽奖项
    if (subIndices.length === 0) return; // 如果没有可抽奖项，结束递归
      shuffleArray(subIndices);
    // 生成一个随机数
    const selectedSubItem = subItems[subIndices[Math.floor(Math.random() * subIndices.length)]];
	if(selectedSubItem.remark == "textimg"){
		//设置签"吉"图片
		if(selectedSubItem.name == "大吉"){
			$('#textimg').attr('src', './starimg/text0.png');
		}else if(selectedSubItem.name == "中吉"){
			$('#textimg').attr('src', './starimg/text1.png');
		}else if(selectedSubItem.name == "小吉"){
			$('#textimg').attr('src', './starimg/text2.png');
		}else if(selectedSubItem.name == "吉"){
			$('#textimg').attr('src', './starimg/text3.png');
		}else if(selectedSubItem.name == "奇"){
			$('#textimg').attr('src', './starimg/text4.png');
		}
	}else if(selectedSubItem.remark == "dordas"){
		//设置结缘物
		$('#dordas').html(selectedSubItem.name); 
	}else if(selectedSubItem.remark == "dordascolor"){
		//设置缘彩
		$('#dordas').append('<br>'+selectedSubItem.name);
		const colors = {
		    "缘彩：丹色": "#fb5731",
		    "缘彩：杏黄": "#ffa40b",
		    "缘彩：琥珀黄": "#ffcd02",
		    "缘彩：麦苗绿": "#62dba1",
		    "缘彩：宫殿绿": "#21a95e",
		    "缘彩：星蓝": "#a9cfec",
		    "缘彩：雪青": "#9f94c2",
		    "缘彩：桃夭": "#ffc7cd",
		    "缘彩：霁青": "#71d6ed",
		    "缘彩：梧枝绿": "#7fc8b2",
		    "缘彩：酡颜": "#ff9d72",
		    "缘彩：明黄": "#ffdc01",
		    "缘彩：梅子青": "#c5d7bc",
		    "缘彩：田园绿": "#7ad8a6",
		    "缘彩：藤萝紫": "#7c729b",
		    "缘彩：藤黄": "#ffe108",
		    "缘彩：霞光红": "#ff8aa1",
		    "缘彩：鸢尾蓝": "#0ea1d6",
		    "缘彩：钴蓝": "#18abdc",
		    "缘彩：栀子黄": "#ffd005",
		    "缘彩：蛙绿": "#4fd69e",
		    "缘彩：石绿": "#62e1de",
		    "缘彩：竹月": "#7d99a9",
		    "缘彩：棟色": "#b8abe5",
		    "缘彩：桃红": "#ffc3b4",
		    "缘彩：蔚蓝": "#28d1e9",
		    "缘彩：蝶翅蓝": "#5994c0",
		    "缘彩：青矾绿": "#2db691",
		    "缘彩：明茶褐": "#bf9c7d",
		    "缘彩：丁香褐": "#f0ccea",
		    "缘彩：春梅红": "#ff9b9e",
		    "缘彩：金盏黄": "#ffd600",
		    "缘彩：天水碧": "#69c2cc",
		    "缘彩：景泰蓝": "#2588d5",
		    "缘彩：银朱": "#ed4d48",
		    "缘彩：苕荣": "#ff823e",
		    "缘彩：酡红": "#ee3626",
		    "缘彩：赤金": "#ffd547",
		    "缘彩：鹅掌黄": "#ffcb25",
		    "缘彩：松霜绿": "#9cc6a9",
		    "缘彩：螺钿紫": "#8b8cba",
		    "缘彩：品蓝": "#2c88cf",
		    "缘彩：豇豆红": "#ffa8b9",
		    "缘彩：雷雨垂": "#9b9b98",
		    "缘彩：缁色": "#7c696c"
		};
		const selectedColor = colors[selectedSubItem.name];
		if (selectedColor) {
		    $('#background').css('background-color', selectedColor);
		}
	}else if(selectedSubItem.remark == "blessing"){
		//设置祝福语
		$('#blessing').html(selectedSubItem.name);
	}else if(selectedSubItem.remark == "entry"){
		//设置词条
		$('#entry').html(selectedSubItem.name);
	}
    drawSubItems(selectedSubItem.id); // 递归调用，继续抽取下级项
  }
  drawSubItems(selectedItem.id); // 开始递归抽取下级项
  // 移除动画类
  //$('#backgrounddiv').css('animation', 'none');
  
  // 强制重绘
  //$('#backgrounddiv')[0].offsetHeight; // 触发重绘
  
  // 重新添加动画
  //$('#backgrounddiv').css('animation', 'xiaoshi 8s 1 forwards');
}

  
// 随机打乱数组的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交换元素
  }
}
