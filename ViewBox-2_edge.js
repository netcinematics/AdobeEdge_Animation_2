/**
 * Adobe Helium: symbol definitions
 */
window.symbols = {
"stage": {
   version: "0.1",
   baseState: "Base State",
   initialState: "Base State",
   parameters: {

   },
   content: {
      dom: [
        {
            id:'Image2',
            type:'image',
            rect:[0,0,800,600],
            fill:['rgba(0,0,0,0)','images/backgroundOnly.png'],
        },
        {
            id:'Text10',
            type:'text',
            rect:[323,0,0,0],
            text:"D",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",24,"rgba(217,60,60,1)","normal","none","normal"],
        },
        {
            id:'Text11',
            type:'text',
            rect:[373,28,0,0],
            text:"E",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",31.7,"rgba(217,60,60,1)","normal","none","normal"],
        },
        {
            id:'Text12',
            type:'text',
            rect:[394,8,0,0],
            text:"M",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",31.7,"rgba(217,60,60,1)","normal","none","normal"],
        },
        {
            id:'Text13',
            type:'text',
            rect:[426,24,0,0],
            text:"O",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",31.7,"rgba(217,60,60,1)","normal","none","normal"],
        },
        {
            id:'Rectangle1',
            type:'rect',
            rect:[219,119,91,107],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgba(0,0,0,1)","none"],
        },
        {
            id:'Image1',
            type:'image',
            rect:[0,0,62,84],
            fill:['rgba(0,0,0,0)','images/logo.png'],
        },
        {
            id:'RoundRect1',
            type:'rect',
            rect:[-1,-5,791,57],
            borderRadius:[10,10,10,10],
            fill:['rgba(225,203,203,1)'],
            stroke:[1,"rgb(0, 0, 0)","solid"],
        },
        {
            id:'Rectangle2',
            type:'rect',
            rect:[311,119,38,97],
            fill:['rgba(192,192,192,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'Rectangle3',
            type:'rect',
            rect:[222,101,93,20],
            fill:['rgba(179,159,159,1)'],
            stroke:[0,"rgb(0, 0, 0)","none"],
        },
        {
            id:'Text14',
            type:'text',
            rect:[27,23,0,0],
            text:"Title: ViewBox",
            font:["Arial Black, Gadget, sans-serif",24,"rgba(0,0,0,1)","normal","none","italic"],
        },
        {
            id:'Text15',
            type:'text',
            rect:[686,44,0,0],
            text:"Hint: Press A Key.",
            align:"-webkit-auto",
            font:["\'Arial Black\', Gadget, sans-serif",24,"rgba(182,182,181,1)","normal","none","italic"],
        },
      ],
      symbolInstances: [
      ],
   },
   states: {
      "Base State": {
         "#Text15": [
            ["transform", "translateX", '-71px'],
            ["style", "font-size", '14.9px'],
            ["style", "height", '31px'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-20px'],
            ["style", "width", '171px']
         ],
         "#stage": [
            ["color", "background-color", 'rgba(223,197,197,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "#Image2": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-10px'],
            ["transform", "translateX", '5px']
         ],
         "#Rectangle2": [
            ["color", "background-color", 'rgba(179,159,159,1.00)'],
            ["transform", "translateX", '-1px'],
            ["transform", "skewY", '-24deg'],
            ["transform", "skewX", '-1deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-8px'],
            ["transform", "scaleY", '1']
         ],
         "#Text11": [
            ["style", "opacity", '0'],
            ["transform", "translateX", '-20px'],
            ["transform", "translateY", '-34px']
         ],
         "#Text10": [
            ["style", "font-size", '31.7px'],
            ["style", "opacity", '0']
         ],
         "#Text12": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-34px'],
            ["transform", "translateX", '14px']
         ],
         "#Text13": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-52px'],
            ["transform", "translateX", '7px']
         ],
         "#RoundRect1": [
            ["color", "background-color", 'rgba(37,31,31,1.00)'],
            ["transform", "translateX", '0'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["transform", "translateY", '-50px'],
            ["color", "border-color", 'rgba(241,229,229,1.00)']
         ],
         "#Image1": [
            ["transform", "translateX", '233px'],
            ["transform", "rotateZ", '0'],
            ["transform", "skewY", '0'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '129px'],
            ["transform", "skewX", '0']
         ],
         "#Text14": [
            ["style", "font-size", '24px'],
            ["transform", "translateX", '0'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(182,182,181,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-10px'],
            ["style", "width", '205px']
         ],
         "#Rectangle3": [
            ["color", "background-color", 'rgba(225,203,203,1.00)'],
            ["transform", "translateX", '1px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "width", '85px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '-66deg'],
            ["transform", "translateY", '7px'],
            ["transform", "scaleY", '0.16']
         ],
         "#Rectangle1": [
            ["transform", "skewX", '0'],
            ["style", "opacity", '0'],
            ["transform", "skewY", '0'],
            ["transform", "rotateZ", '90deg']
         ]
      }
   },
   actions: {

   },
   bindings: [

   ],
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         timeline: [
            { id: "eid417", tween: [ "transform", "#Rectangle3", "translateY", '0px', { valueTemplate: undefined, fromValue: '7px'}], position: 5015, duration: 250, easing: "linear" },
            { id: "eid464", tween: [ "transform", "#Rectangle2", "translateY", '-8px', { valueTemplate: undefined, fromValue: '-8px'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid455", tween: [ "transform", "#Text15", "translateX", '-71px', { valueTemplate: undefined, fromValue: '-71px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid492", tween: [ "transform", "#Text14", "translateY", '-10px', { valueTemplate: undefined, fromValue: '-10px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid454", tween: [ "transform", "#Image2", "translateY", '-10px', { valueTemplate: undefined, fromValue: '-10px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid500", tween: [ "transform", "#Image2", "translateY", '-7px', { valueTemplate: undefined, fromValue: '-10px'}], position: 6000, duration: 1000, easing: "linear" },
            { id: "eid441", tween: [ "style", "#Text14", "font-size", '24px', { valueTemplate: undefined, fromValue: '24px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid439", tween: [ "style", "#Text14", "font-size", '24px', { valueTemplate: undefined, fromValue: '24px'}], position: 4500, duration: 0, easing: "linear" },
            { id: "eid462", tween: [ "transform", "#Rectangle2", "translateX", '-1px', { valueTemplate: undefined, fromValue: '-1px'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid197", tween: [ "transform", "#Image1", "translateY", '129px', { valueTemplate: undefined, fromValue: '129px'}], position: 3456, duration: 0, easing: "linear" },
            { id: "eid481", tween: [ "transform", "#RoundRect1", "translateX", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid472", tween: [ "transform", "#RoundRect1", "translateX", '0', { valueTemplate: undefined, fromValue: '0'}], position: 3000, duration: 0, easing: "linear" },
            { id: "eid379", tween: [ "style", "#Rectangle3", "opacity", '0.041176470588235', { valueTemplate: undefined, fromValue: '0'}], position: 4000, duration: 926, easing: "linear" },
            { id: "eid372", tween: [ "style", "#Rectangle3", "opacity", '1', { valueTemplate: undefined, fromValue: '0.041176470588235'}], position: 4926, duration: 338, easing: "linear" },
            { id: "eid286", tween: [ "style", "#Rectangle2", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid288", tween: [ "style", "#Rectangle2", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 5000, duration: 15, easing: "linear" },
            { id: "eid495", tween: [ "style", "#Text14", "opacity", '0.37647058823529', { valueTemplate: undefined, fromValue: '1'}], position: 0, duration: 6000, easing: "linear" },
            { id: "eid437", tween: [ "color", "#Text14", "color", 'rgba(159,159,39,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(182,182,181,1)'}], position: 0, duration: 2000, easing: "linear" },
            { id: "eid438", tween: [ "color", "#Text14", "color", 'rgba(246,246,12,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(159,159,39,1)'}], position: 2000, duration: 2000, easing: "linear" },
            { id: "eid440", tween: [ "color", "#Text14", "color", 'rgba(246,246,12,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(246,246,12,1.00)'}], position: 4500, duration: 0, easing: "linear" },
            { id: "eid297", tween: [ "transform", "#Rectangle3", "skewY", '0deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid256", tween: [ "transform", "#Image1", "skewY", '0', { valueTemplate: undefined, fromValue: '0'}], position: 5000, duration: 0, easing: "linear" },
            { id: "eid258", tween: [ "transform", "#Image1", "skewY", '0', { valueTemplate: undefined, fromValue: '0'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid190", tween: [ "color", "#stage", "background-color", 'rgba(233,215,215,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(223,197,197,1.00)'}], position: 0, duration: 2500, easing: "linear" },
            { id: "eid191", tween: [ "color", "#stage", "background-color", 'rgba(228,208,208,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(233,215,215,1)'}], position: 2500, duration: 1500, easing: "linear" },
            { id: "eid192", tween: [ "color", "#stage", "background-color", 'rgba(220,200,200,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(228,208,208,1)'}], position: 4000, duration: 370, easing: "linear" },
            { id: "eid193", tween: [ "color", "#stage", "background-color", 'rgba(213,180,180,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(220,200,200,1)'}], position: 4370, duration: 130, easing: "linear" },
            { id: "eid194", tween: [ "color", "#stage", "background-color", 'rgba(213,194,194,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(213,180,180,1.00)'}], position: 4500, duration: 157, easing: "linear" },
            { id: "eid475", tween: [ "color", "#RoundRect1", "background-color", 'rgba(41,9,9,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(37,31,31,1)'}], position: 0, duration: 3000, easing: "linear" },
            { id: "eid477", tween: [ "color", "#RoundRect1", "background-color", 'rgba(14,2,2,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(41,9,9,1)'}], position: 3000, duration: 500, easing: "linear" },
            { id: "eid264", tween: [ "transform", "#Rectangle2", "skewY", '-24deg', { valueTemplate: undefined, fromValue: '-24deg'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid244", tween: [ "style", "#Rectangle1", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid220", tween: [ "style", "#Rectangle1", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 2000, duration: 2657, easing: "linear" },
            { id: "eid249", tween: [ "style", "#Image2", "opacity", '1', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 5000, easing: "linear" },
            { id: "eid245", tween: [ "style", "#Image1", "opacity", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid217", tween: [ "style", "#Image1", "opacity", '0.45882352941176', { valueTemplate: undefined, fromValue: '0'}], position: 1000, duration: 2456, easing: "linear" },
            { id: "eid213", tween: [ "style", "#Image1", "opacity", '1', { valueTemplate: undefined, fromValue: '0.45882352941176'}], position: 3456, duration: 1200, easing: "linear" },
            { id: "eid489", tween: [ "style", "#Text15", "opacity", '0.23529411764706', { valueTemplate: undefined, fromValue: '1'}], position: 0, duration: 6500, easing: "linear" },
            { id: "eid456", tween: [ "transform", "#Text15", "translateY", '-20px', { valueTemplate: undefined, fromValue: '-20px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid253", tween: [ "transform", "#Rectangle1", "skewY", '0', { valueTemplate: undefined, fromValue: '0'}], position: 5000, duration: 0, easing: "linear" },
            { id: "eid251", tween: [ "transform", "#Rectangle1", "skewY", '0', { valueTemplate: undefined, fromValue: '0'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid490", tween: [ "transform", "#Text14", "translateX", '0', { valueTemplate: undefined, fromValue: '0'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid415", tween: [ "transform", "#Rectangle3", "translateX", '22px', { valueTemplate: undefined, fromValue: '1px'}], position: 5015, duration: 250, easing: "linear" },
            { id: "eid466", tween: [ "transform", "#Rectangle3", "translateX", '20px', { valueTemplate: undefined, fromValue: '22px'}], position: 5265, duration: 735, easing: "linear" },
            { id: "eid378", tween: [ "style", "#Rectangle3", "width", '85px', { valueTemplate: undefined, fromValue: '85px'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid418", tween: [ "transform", "#Rectangle2", "scaleX", '1', { valueTemplate: undefined, fromValue: '1'}], position: 5000, duration: 0, easing: "linear" },
            { id: "eid238", tween: [ "transform", "#Rectangle1", "rotateZ", '184deg', { valueTemplate: undefined, fromValue: '90deg'}], position: 2000, duration: 1500, easing: "linear" },
            { id: "eid240", tween: [ "transform", "#Rectangle1", "rotateZ", '275deg', { valueTemplate: undefined, fromValue: '184deg'}], position: 3500, duration: 250, easing: "linear" },
            { id: "eid242", tween: [ "transform", "#Rectangle1", "rotateZ", '360deg', { valueTemplate: undefined, fromValue: '275deg'}], position: 3750, duration: 250, easing: "linear" },
            { id: "eid243", tween: [ "transform", "#Rectangle1", "rotateZ", '360deg', { valueTemplate: undefined, fromValue: '360deg'}], position: 4250, duration: 0, easing: "linear" },
            { id: "eid260", tween: [ "color", "#Rectangle2", "background-color", 'rgba(179,159,159,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,159,159,1.00)'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid406", tween: [ "transform", "#Rectangle3", "scaleX", '1', { valueTemplate: undefined, fromValue: '1'}], position: 4985, duration: 0, easing: "linear" },
            { id: "eid408", tween: [ "transform", "#Rectangle3", "scaleX", '1', { valueTemplate: undefined, fromValue: '1'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid254", tween: [ "transform", "#Rectangle1", "skewX", '-1deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 5000, duration: 45, easing: "linear" },
            { id: "eid401", tween: [ "transform", "#Rectangle1", "skewX", '0deg', { valueTemplate: undefined, fromValue: '-1deg'}], position: 5045, duration: 955, easing: "linear" },
            { id: "eid484", tween: [ "transform", "#RoundRect1", "translateY", '0px', { valueTemplate: undefined, fromValue: '-50px'}], position: 0, duration: 250, easing: "linear" },
            { id: "eid196", tween: [ "transform", "#Image1", "translateX", '233px', { valueTemplate: undefined, fromValue: '233px'}], position: 3456, duration: 0, easing: "linear" },
            { id: "eid275", tween: [ "transform", "#Rectangle2", "skewX", '-1deg', { valueTemplate: undefined, fromValue: '-1deg'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid368", tween: [ "color", "#Rectangle3", "background-color", 'rgba(225,203,203,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(225,203,203,1.00)'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid469", tween: [ "transform", "#Rectangle3", "skewX", '-66deg', { valueTemplate: undefined, fromValue: '-66deg'}], position: 6000, duration: 0, easing: "linear" },
            { id: "eid450", tween: [ "style", "#Text15", "width", '171px', { valueTemplate: undefined, fromValue: '171px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid498", tween: [ "color", "#RoundRect1", "border-color", 'rgba(92,14,14,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(241, 229, 229)'}], position: 3000, duration: 4000, easing: "linear" },
            { id: "eid453", tween: [ "transform", "#Image2", "translateX", '5px', { valueTemplate: undefined, fromValue: '5px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid499", tween: [ "transform", "#Image2", "translateX", '2px', { valueTemplate: undefined, fromValue: '5px'}], position: 6000, duration: 1000, easing: "linear" },
            { id: "eid452", tween: [ "style", "#Text15", "font-size", '14.9px', { valueTemplate: undefined, fromValue: '14.9px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid231", tween: [ "transform", "#Image1", "rotateZ", '0', { valueTemplate: undefined, fromValue: '0'}], position: 3000, duration: 0, easing: "linear" },
            { id: "eid232", tween: [ "transform", "#Image1", "rotateZ", '0', { valueTemplate: undefined, fromValue: '0'}], position: 3250, duration: 0, easing: "linear" },
            { id: "eid411", tween: [ "transform", "#Rectangle3", "scaleY", '1', { valueTemplate: undefined, fromValue: '0.16'}], position: 5015, duration: 250, easing: "linear" },
            { id: "eid419", tween: [ "transform", "#Rectangle2", "scaleY", '1', { valueTemplate: undefined, fromValue: '1'}], position: 5000, duration: 0, easing: "linear" },
            { id: "eid457", tween: [ "style", "#Text14", "width", '205px', { valueTemplate: undefined, fromValue: '205px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid451", tween: [ "style", "#Text15", "height", '31px', { valueTemplate: undefined, fromValue: '31px'}], position: 0, duration: 0, easing: "linear" },
            { id: "eid478", tween: [ "style", "#RoundRect1", "border-width", '1px', { valueTemplate: undefined, fromValue: '1px'}], position: 3000, duration: 0, easing: "linear" },
            { id: "eid496", tween: [ "style", "#RoundRect1", "border-width", '1px', { valueTemplate: undefined, fromValue: '1px'}], position: 7000, duration: 0, easing: "linear" },
            { id: "eid259", tween: [ "transform", "#Image1", "skewX", '-1deg', { valueTemplate: undefined, fromValue: '0deg'}], position: 5000, duration: 45, easing: "linear" },
            { id: "eid402", tween: [ "transform", "#Image1", "skewX", '0deg', { valueTemplate: undefined, fromValue: '-1deg'}], position: 5045, duration: 955, easing: "linear" }]
      }
   },
}};

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     $.Edge.initialize(symbols);
});
/**
 * Adobe Edge Timeline Launch
 */
$(window).load(function() {
    $.Edge.play();
});
