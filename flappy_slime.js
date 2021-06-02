(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"flappy_slime_atlas_1", frames: [[366,1655,560,147],[0,1655,364,364],[702,1566,440,32],[702,1524,440,40],[366,1804,209,220],[702,722,96,800],[800,722,96,800],[0,0,1429,720],[577,1804,116,70],[0,722,700,931]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bgc = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.button_play = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.steve = function() {
	this.initialize(ss["flappy_slime_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// title
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-103,-25.95,0.3732,0.3732);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-25.9,209,54.8);


(lib.score_board = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-63.95,-63.95,0.3521,0.3521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-63.9,128.1,128.1);


(lib.disc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// disc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgYAPIAAgKIAxAAIAAAKgAAZAFIAAgJIAeAAIAAAJgAAZAFgAg2AFIAAgJIgKAAIAAgKIAKAAIAAAKIAeAAIAAAJgAA3gEIAAgKIAKAAIAAAKg");
	this.shape.setTransform(0,7,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF90").s().p("AgEAPIAAgKIgKAAIAAgJIAKAAIAAAJIAJAAIAAAKgAAFAFIAAgJIAKAAIAAAJgAgEgEIAAgKIAJAAIAAAKgAgEgEg");
	this.shape_1.setTransform(0,-1,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FF00").s().p("AAFAPIAAgKIAKAAIAAAKgAgOAPIAAgKIAKAAIAAAKgAAPAFIAAgJIAKAAIAAAJgAgYAFIAAgJIAKAAIAAAJgAAFgEIAAgKIAKAAIAAAKgAgOgEIAAgKIAKAAIAAAKg");
	this.shape_2.setTransform(0,-1,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#515151").s().p("AAFAZIAAgKIAKAAIAAAKgAgYAZIAAgKIAKAAIAKAAIAAAKgAAZAPIAAgKIAUAAIAAgJIAKAAIAAAJIgKAAIAAAKgAgsAPIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAAjgEIAAgKIAKAAIAAAKgAgsgEIAAgKIAUAAIAAAKgAAPgOIgKAAIAAgKIAUAAIAAAKgAgOgOIAAgKIAKAAIAAAKg");
	this.shape_3.setTransform(0,-1,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262626").s().p("AgYAZIAAgKIgeAAIAAgKIAeAAIAAAKIAxAAIAAAKgAAZAPIAAgKIAeAAIAAAKgAA3AFIAAgJIAKAAIAAAJgAhAAFIAAgJIAKAAIAAAJgAgEgOIAAgKIAJAAIAAAKg");
	this.shape_4.setTransform(0,3,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#404040").s().p("AgYAjIAAgKIAUAAIAAgKIAJAAIAAAKIAKAAIAAgKIAAgKIAKAAIAAAKIAUAAIAAgKIAKAAIAAgJIgKAAIAAgKIgKAAIAAAKIAKAAIAAAJIgUAAIAAgJIgKAAIAAgKIAKAAIAAgKIAeAAIAAAKIAKAAIAAAdIgKAAIAAAKIgeAAIAAAKgAg2AZIAAgKIgKAAIAAgdIAKAAIAAgKIAeAAIAAgKIAxAAIAAAKIgUAAIAAAKIgJAAIAAgKIgKAAIAAAKIAAAKIgKAAIAAgKIgUAAIAAAKIAUAAIAAAJIAKAAIAAAKIgKAAIAAAKgAg2AFIAKAAIAAAKIAKAAIAAgKIgKAAIAAgJIgKAAgAAtgEg");
	this.shape_5.setTransform(0,-1,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#212121").s().p("ABBAjIAAgKIAAgdIAKAAIAAAngAhKAjIAAgnIAKAAIAAAdIAAAKgAA3gEIAAgKIgeAAIAAgKIAeAAIAAAKIAKAAIAAAKgAhAgEIAAgKIAKAAIAAAKgAhAgEgAg2gOIAAgKIAeAAIAAAKgAgYgYIAAgKIAxAAIAAAKgAgYgYg");
	this.shape_6.setTransform(0,-3,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-10,30,20);


(lib.disabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// disabled
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C20000").s().p("AgJAKIAAgKIAJAAIAAgJIAKAAIAAAJIgKAAIAAAKg");
	this.shape.setTransform(-8.5857,-8.5712,2.1429,2.1429);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D35154").s().p("AgJAKIAAgKIAJAAIAAgJIAKAAIAAAJIgKAAIAAAKg");
	this.shape_1.setTransform(8.5571,8.5716,2.1429,2.1429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE6B6D").s().p("Ag7A8IAAhjIAKAAIAABjgAgxgnIAAgKIAKAAIAAAKgAgngxIAAgKIBjAAIAAAKgAgngxg");
	this.shape_2.setTransform(-2.1571,-2.1426,2.1429,2.1429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF171D").s().p("Ag7A8IAAgKIAKAAIAAAKgAAygxIAAgKIAKAAIAAAKg");
	this.shape_3.setTransform(-0.0143,0.0002,2.1429,2.1429);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B10000").s().p("Ag7A8IAAgKIBjAAIAAAKgAAoAyIAAgKIAKAAIAAAKgAAyAoIAAhjIAKAAIAABjgAAyAog");
	this.shape_4.setTransform(2.1286,2.1431,2.1429,2.1429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF0000").s().p("AgsAtIAAgKIAKAAIAAAKgAgiAjIAAgKIAKAAIAAAKgAgYAZIAAgKIAKAAIAAAKgAgOAPIAAgKIAKAAIAAgJIAJAAIAAAJIgJAAIAAAKgAgOAPgAAFgEIAAgKIAKAAIAAAKgAAPgOIAAgKIAKAAIAAAKgAAPgOgAAZgYIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKg");
	this.shape_5.setTransform(1.0571,1.0716,2.1429,2.1429);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E30000").s().p("AgxA8IAAgKIgKAAIAAhjIAKAAIAAgKIBjAAIAAAKIAKAAIAABjIgKAAIAAAKgAgnAyIAKAAIA7AAIAKAAIAAgKIAKAAIAAgKIAAg7IAAgKIgKAAIAAAKIgKAAIAAgKIAKAAIAAgKIgKAAIg7AAIgKAAIAAAKIgKAAIAAAKIAAA7IAAAKIAKAAIAAgKIAKAAIAAAKIgKAAgAgdAeIAAgKIAKAAIAAAKgAgTAUIAAgKIAKAAIAAAKgAgJAKIAAgKIAJAAIAAAKgAAAAAIAAgJIAKAAIAAAJgAAAAAgAAKgJIAAgKIAKAAIAAAKgAAUgTIAAgKIAKAAIAAAKg");
	this.shape_6.setTransform(-0.0143,0.0002,2.1429,2.1429);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D73739").s().p("AgsAtIAAgKIAKAAIAAAKgAgiAjIAAgKIAKAAIAAAKgAgiAjgAgYAZIAAgKIAKAAIAAAKgAgOAPIAAgKIAKAAIAAAKgAgEAFIAAgJIAJAAIAAAJgAgEAFgAAFgEIAAgKIAKAAIAAAKgAAPgOIAAgKIAKAAIAAAKgAAZgYIAAgKIAKAAIAAAKgAAjgiIAAgKIAKAAIAAAKg");
	this.shape_7.setTransform(-1.0857,-1.0712,2.1429,2.1429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.btni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["flappy_slime_atlas_1"],8);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(1,0,0,1,-58,-35)).s().p("ApDFeIAAq7ISHAAIAAK7g")
	}.bind(this);
	this.shape.setTransform(58,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,70);


(lib.slime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slime
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75C063").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(5.625,13.125,0.375,0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0A0A").s().p("AAACWIAAhkIBkAAIAABkgABkgxIAAhkIBkAAIAABkgAjHgxIAAhkIBkAAIAABkg");
	this.shape_1.setTransform(0,1.875,0.375,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#162810").s().p("ADIBkIAAhkIhkAAIAAhjIDIAAIAADHgAkrBkIAAjHIDIAAIAABjIhkAAIAABkg");
	this.shape_2.setTransform(0,-3.75,0.375,0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6BAF5A").s().p("AhjGQIAAhkIjIAAIAAjIIhkAAIAAhkIBkAAIBkAAIBkAAIAAhjIAAhkIjIAAIAAhkIDIAAIAAhkIBjAAIAABkIEsAAIAABkIjIAAIAABkIAABjIBkAAIBkAAIAABkIBkAAIAABkIhkAAIAABkIhkAAIhkAAIhkAAIAABkgAAADIIBkAAIAAhkIhkAAg");
	this.shape_3.setTransform(0,0,0.375,0.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7DCC6A").s().p("ADIGQIAAhkIBkAAIAAhkIBkAAIAADIgAAAGQIAAhkIBkAAIAABkgAmPGQIAAksIBkAAIAADIIDIAAIAABkgAEsBkIAAhkIAAjHIAAhkIksAAIAAhkIGQAAIAAHzgAmPAAIAAmPIEsAAIAABkIjIAAIAABkIAADHg");
	this.shape_4.setTransform(0,0,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,-10.5,0.3344,0.3344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.5,69.9,73.6);


(lib.nether_star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D200").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(0.0036,-0.0038,3.3846,3.3846);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E277").s().p("AgJAKIAAgKIAJAAIAAAKgAAAAAIAAgJIAKAAIAAAJg");
	this.shape_1.setTransform(1.6959,1.6885,3.3846,3.3846);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBD6D6").s().p("AgEAjIAAgKIAJAAIAAAKgAgOAPIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAAPgOIgKAAIAAgUIAKAAIAAAKIAKAAIAAAKgAgYgOIAAgKIAKAAIAAgKIAKAAIAAAUg");
	this.shape_2.setTransform(0.0036,3.3809,3.3846,3.3846);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#556B6B").s().p("AgOA8IAAgKIAKAAIAAAKgAgEAyIAAgKIAJAAIAAAKgAgYAyIAAgKIAKAAIAAAKgAAFAoIAAgUIAKAAIAAAUgAgiAoIAAgUIgUAAIAAgKIAKAAIAKAAIAAAKIAKAAIAAAKIAAAKgAAPAUIAAgKIAUAAIAAAKgAAPAUgAAjAKIAAgKIAKAAIAAAKgAAtAAIAAgJIAKAAIAAAJgAAtAAgAAjgJIAAgKIgKAAIgKAAIAAgKIAUAAIAAAKIAKAAIAAAKgAAFgdIAAgKIAAgKIAKAAIAAAUgAgEgxIAAgKIAJAAIAAAKg");
	this.shape_3.setTransform(3.3883,1.6885,3.3846,3.3846);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFFA8").s().p("AgEAjIAAgKIAAgKIAJAAIAAAKIAAAKgAAZAFIgKAAIAAgJIAKAAIAKAAIAAAJgAgOAFIgKAAIgKAAIAAgJIAKAAIAUAAIAAAJgAgEgEIAAgUIAAgKIAJAAIAAAKIAAAUg");
	this.shape_4.setTransform(0.0036,-0.0038,3.3846,3.3846);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAE2E2").s().p("AgYAZIAAgKIAKAAIAAAKgAAPgOIAAgKIAKAAIAAAKg");
	this.shape_5.setTransform(-6.7656,-6.773,3.3846,3.3846);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B9C9C9").s().p("AgTAjIAAgKIAKAAIAAAKgAAAAZIAAgKIAAgKIAKAAIAKAAIAAAKIgKAAIAAAKgAgTAPIAAgKIAKAAIAAAKgAgnAPIAAgKIAKAAIAAAKgAAeAFIAAgJIAKAAIAAAJgAAUgEIAAgKIAKAAIAAAKgAgngEIAAgKIAKAAIAAAKgAAAgYIAAgKIAKAAIAAAKgAgTgYIAAgKIAKAAIAAAKg");
	this.shape_6.setTransform(1.6959,-0.0038,3.3846,3.3846);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88A4A4").s().p("AgEA3IAAgKIgKAAIAAgKIAKAAIAAAKIAJAAIAAgKIAAgKIAKAAIAAAUIgKAAIAAAKgAAPAZIAAgKIAKAAIAAAKgAgYAZIAAgKIAKAAIAAAKgAAZAPIAAgKIAKAAIAKAAIAAAKgAAZAPgAgsAPIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAAtAFIAAgJIgKAAIAAgKIAKAAIAAAKIAKAAIAAAJgAgsgEIAAgKIAKAAIAAAKgAAPgOIAAgKIAKAAIAAAKgAgYgOIAAgKIAKAAIAAAKgAAFgiIAAgKIAKAAIAAAKgAgOgiIAAgKIAKAAIAAAKgAgEgsIAAgKIAJAAIAAAKg");
	this.shape_7.setTransform(0.0036,-0.0038,3.3846,3.3846);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#649090").s().p("AgYAoIAAgKIAKAAIAAAKgAgiAeIAAgKIAKAAIAAAKgAgYAUIAAgKIAKAAIAAAKgAgEAKIgKAAIAAgKIATAAIAAAKgAAFAAIAAgTIAKAAIAAAKIAAAJgAAPgTIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKg");
	this.shape_8.setTransform(-10.1502,-8.4653,3.3846,3.3846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.golden_carrot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carrot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFFE6").s().p("AAAAKIgJAAIAAgKIAJAAIAAgJIAKAAIAAAJIAAAKg");
	this.shape.setTransform(-6.2664,0.0066,3.1428,3.1428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B26411").s().p("AgsAoIAAgUIAKAAIAAAKIAAAKgAgOAeIAAgKIAKAAIAAAKgAgiAUIAAgUIAKAAIAAAKIAAAKgAgiAUgAAPAKIAAgKIAKAAIAAAKgAgYAAIAAgTIAKAAIAAAKIAAAJgAAjgJIAAgKIAKAAIAAAKgAgOgTIAAgUIAKAAIAAAKIAAAKg");
	this.shape_1.setTransform(-7.8378,6.2923,3.1428,3.1428);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEE57").s().p("AgTAZIAAgKIAAgKIAKAAIAJAAIAAAKIgJAAIAAAKgAAKgEIAAgKIgKAAIAAAKIgJAAIAAgKIAJAAIAAgKIAKAAIAKAAIAAAKIAAAKg");
	this.shape_2.setTransform(-6.2664,1.578,3.1428,3.1428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#301600").s().p("AgTAZIAAgKIAKAAIAAAKgAAKAFIAAgJIAKAAIAAAJgAgJAFIAAgJIgKAAIAAgKIAKAAIAAAKIAJAAIAAAJgAgJgOIAAgKIAJAAIAAAKg");
	this.shape_3.setTransform(12.5906,-1.5648,3.1428,3.1428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#541209").s().p("AgxAyIAAgKIAKAAIAKAAIAAAKgAgdAoIAAgKIAKAAIAKAAIAAAKgAgdAogAgJAeIAAgKIAJAAIAAAKgAgJAegAAAAUIAAgKIAKAAIAKAAIAAAKgAAUAKIAAgKIAKAAIAAAKgAAeAAIAAgJIAKAAIAAAJgAAeAAgAAogJIAAgKIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAAAKgAAogJgAgJgnIAAgKIAJAAIAAAKg");
	this.shape_4.setTransform(-6.2664,6.2923,3.1428,3.1428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBA213").s().p("AgnAtIAAgKIAKAAIAAAKgAgdAjIAAgKIAKAAIAAAKgAgJAZIgKAAIAAgKIAKAAIAJAAIAAAKgAgTAZgAAAAPIAAgKIAKAAIAAAKgAgdAPIAAgKIAKAAIAAAKgAAUAFIgKAAIAAgJIAKAAIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIAAAJgAAKAFgAgTgEIAAgKIAKAAIAAAKgAAUgYIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKg");
	this.shape_5.setTransform(-6.2664,4.7209,3.1428,3.1428);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECCB45").s().p("AgiAoIAAgKIAKAAIAAAKgAgYAeIAAgKIAKAAIAAAKgAgYAegAgEAUIAAgKIAJAAIAAAKgAAFAKIAAgKIAKAAIAAAKgAAPAAIAAgJIAKAAIAAAJgAAZgJIAAgKIAKAAIAAAKgAgEgTIAAgKIAJAAIAAAKgAAFgdIAAgKIAKAAIAAAKgAAFgdg");
	this.shape_6.setTransform(-7.8378,3.1495,3.1428,3.1428);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#532906").s().p("AAPAoIAAgKIgKAAIAAgKIAKAAIAAgKIAKAAIAAAKIAAAUgAAjAUIAAgKIAKAAIAAAKgAAZAKIAAgKIgKAAIAAAKIgKAAIAAgKIAKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAgOAAIgKAAIAAgJIAAgKIAKAAIAAgUIAKAAIAAAKIAAAKIgKAAIAAAKIAKAAIAAAJgAgsgJIAAgKIAAgKIAKAAIAAAKIAAAKgAAPgTIAAgKIAKAAIAAAKg");
	this.shape_7.setTransform(7.8764,-6.2791,3.1428,3.1428);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#715008").s().p("AAPAUIAAgKIAKAAIAAAKgAgOAUIAAgKIAKAAIAAAKgAAZAKIAAgKIAAgJIAKAAIAAAJIAAAKgAAZAKgAgEAKIAAgTIgKAAIgKAAIAAgKIAUAAIAAAKIAJAAIAAATgAgEAKgAgiAKIAAgKIAKAAIAAAKg");
	this.shape_8.setTransform(1.5907,-15.7076,3.1428,3.1428);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#573D06").s().p("AAjAeIAAgKIAKAAIAAAKgAAPAUIAAgKIAKAAIAAAKgAAZAKIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAAFAKIAAgKIAKAAIAAAKgAgiAKIAAgKIAKAAIAAAKgAAPAAgAgOAAIAAgJIAAgKIAKAAIAAgKIAJAAIAAAKIgJAAIAAATgAgsAAIAAgJIAKAAIAAAJgAAjgJIAAgKIAKAAIAAAKg");
	this.shape_9.setTransform(1.5907,-12.5647,3.1428,3.1428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.diamond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// diamond
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CE0D8").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(-12.8334,14.6943,3.6667,3.6654);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C919A").s().p("AgnAeIAAgKIAKAAIAAAKgAAeAAIAAgJIAKAAIAAAJgAAKgJIAAgKIAAgKIAKAAIAAAKIAAAKg");
	this.shape_1.setTransform(3.6667,9.1962,3.6667,3.6654);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1AAAA7").s().p("AAKAeIAAgUIgnAAIAAgKIAdAAIAKAAIAAAKIAKAAIAAAKIAAAKgAgnAeIAAgKIAAgKIAKAAIAAAUgAgdAKgAAeAAIgKAAIAAgJIAKAAIAAgUIAKAAIAAAdgAAKgTIAAgKIAKAAIAAAKg");
	this.shape_2.setTransform(3.6667,5.5308,3.6667,3.6654);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20C5B5").s().p("AAPAyIAAgKIgTAAIgUAAIAAgUIAnAAIAAAUIAKAAIAAAKgAAZAeIAAgKIgKAAIAAgKIAKAAIAKAAIAAAKIAAAKgAgiAKIAAgKIAKAAIAAAKgAAZAAIAAgJIAAgKIAKAAIAAATgAAZgdIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKg");
	this.shape_3.setTransform(1.8333,1.8654,3.6667,3.6654);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4AEDD9").s().p("AgTAyIAAgKIATAAIAAAKgAgnAeIAAgKIAAgKIAKAAIAKAAIAAAKIgKAAIAAAKgAAKAKIAAgKIAKAAIAAAKgAgTAAIAAgJIAAgKIAKAAIAJAAIAAAKIgJAAIAAAJgAgnAAIAAgTIAKAAIAAAKIAAAJgAAegTIgKAAIAAgKIAAgKIAKAAIAAAKIAKAAIAAAKgAgdgTIAAgUIAKAAIAAgKIATAAIAAAKIgTAAIAAAKIAAAKgAgdgTg");
	this.shape_4.setTransform(0,1.8654,3.6667,3.6654);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5FFF6").s().p("AgiAoIAAgKIAKAAIAAAKgAgOAUIAAgKIAKAAIAAAKgAAZAAIAAgJIAKAAIAAAJgAAFAAIAAgJIAKAAIAAAJgAAPgJIAAgKIAKAAIAAAKgAAZgTIAAgKIAAgKIAKAAIAAAKIAAAKg");
	this.shape_5.setTransform(-5.5,-5.4654,3.6667,3.6654);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1FBE8").s().p("AgJAyIAAgKIATAAIAAAKgAAUAoIAAgKIAKAAIAAAKgAgdAKIAAgKIAKAAIAAgJIAKAAIAAgKIAJAAIAKAAIAAAKIAAAJIgKAAIAAAKgAAAgdIAAgKIgJAAIAAAKIgKAAIgKAAIAAgKIAUAAIAAgKIAJAAIAAAKIAKAAIAAAKg");
	this.shape_6.setTransform(3.6667,1.8654,3.6667,3.6654);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAjIgKAAIAAgeIAKAAIAAAUIAKAAIAAAKgAgJAPIAAgKIAJAAIAAgJIAKAAIAAAJIgKAAIAAAKgAAUAFIAAgJIAKAAIAAAJgAgTAFIAAgTIAKAAIAAATgAgTAFgAgJgOIAAgKIAJAAIAAgKIAeAAIAAAKIgKAAIgUAAIAAAKgAgJgOg");
	this.shape_7.setTransform(-7.3333,-7.2981,3.6667,3.6654);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#145E53").s().p("AgiA3IAAgKIgKAAIAAgKIgKAAIAAgUIAKAAIAAAKIAAAKIAKAAIAAAKIAKAAIAUAAIATAAIAKAAIAAAKgAAZAtIAAgKIAKAAIAAAKgAAjAjIAAgKIAAgKIAKAAIAAAUgAAjAjgAAtAPIAAgKIAAgdIAKAAIAAAngAAjgYIAAgKIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAUg");
	this.shape_8.setTransform(1.8333,3.6981,3.6667,3.6654);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#11727A").s().p("AgsAtIAAgoIAKAAIAAAeIAAAKgAgiAFIAAgTIAKAAIAAATgAgiAFgAgYgOIAAgKIAKAAIAAAKgAAjgYIAAgKIAKAAIAAAKgAgOgYIAAgKIAKAAIAAAKgAAZgiIgdAAIAAgKIAnAAIAAAKg");
	this.shape_9.setTransform(-5.5,-7.2981,3.6667,3.6654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-23.8,44,47.7);


(lib.carrot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carrot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC177").s().p("AAAAKIgJAAIAAgKIAJAAIAAgJIAKAAIAAAJIAAAKg");
	this.shape.setTransform(-6.2928,0,3.1428,3.1428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC3900").s().p("AgsAoIAAgUIAKAAIAAAKIAAAKgAgOAeIAAgKIAKAAIAAAKgAgiAUIAAgUIAKAAIAAAKIAAAKgAAPAKIAAgKIAKAAIAAAKgAgYAAIAAgTIAKAAIAAAKIAAAJgAgYAAgAAjgJIAAgKIAKAAIAAAKgAgOgTIAAgUIAKAAIAAAKIAAAKgAgOgTg");
	this.shape_1.setTransform(-7.8643,6.2857,3.1428,3.1428);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005000").s().p("AgTAZIAAgKIAKAAIAAAKgAAKAFIAAgJIAKAAIAAAJgAgJAFIAAgJIgKAAIAAgKIAKAAIAAAKIAJAAIAAAJgAgJgOIAAgKIAJAAIAAAKg");
	this.shape_2.setTransform(12.5642,-1.5714,3.1428,3.1428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#752802").s().p("AgxAyIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAAKIgUAAIAAAKgAgJAeIAAgKIAJAAIAAAKgAAAAUIAAgKIAKAAIAKAAIAAAKgAAAAUgAAUAKIAAgKIAKAAIAAAKgAAeAAIAAgJIAKAAIAAAJgAAeAAgAAogJIAAgKIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAAAKIAAAKgAgJgnIAAgKIAJAAIAAAKg");
	this.shape_3.setTransform(-6.2928,6.2857,3.1428,3.1428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8E09").s().p("AgiAoIAAgKIAKAAIAAAKgAgYAeIAAgKIAKAAIAAAKgAgYAegAgEAUIAAgKIAJAAIAAAKgAAFAKIAAgKIAKAAIAAAKgAAPAAIAAgJIAKAAIAAAJgAAZgJIAAgKIAKAAIAAAKgAAZgJgAgEgTIAAgKIAJAAIAAAKgAAFgdIAAgKIAKAAIAAAKgAAFgdg");
	this.shape_4.setTransform(-7.8643,3.1428,3.1428,3.1428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFA73F").s().p("AgTAZIAAgKIAAgKIAKAAIAJAAIAAAKIgJAAIAAAKgAAKgEIAAgKIgKAAIAAgKIAKAAIAKAAIAAAKIAAAKgAgJgEIAAgKIAJAAIAAAKg");
	this.shape_5.setTransform(-6.2928,1.5714,3.1428,3.1428);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D36A0D").s().p("AgnAtIAAgKIAKAAIAAAKgAgdAjIAAgKIAKAAIAAAKgAgdAjgAgJAZIgKAAIAAgKIgKAAIAAgKIAKAAIAAAKIAKAAIAJAAIAAAKgAgTAZgAAAAPIAAgKIAKAAIAAgJIAKAAIAAgKIAKAAIAAgKIAKAAIAAAKIgKAAIAAAKIAAAJIgKAAIgKAAIAAAKgAgTgEIAAgKIAKAAIAAAKgAAUgYIAAgKIAKAAIAAAKgAAKgiIAAgKIAKAAIAAAKg");
	this.shape_6.setTransform(-6.2928,4.7143,3.1428,3.1428);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#036703").s().p("AAPAoIAAgKIgKAAIAAgKIAKAAIAAgKIAKAAIAAAKIAAAUgAAjAUIAAgKIgKAAIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKgAAFAKIAAgKIAKAAIAAAKgAAPAAgAgOAAIgKAAIAAgJIAAgKIAKAAIAAgUIAKAAIAAAKIAAAKIgKAAIAAAKIAKAAIAAAJgAgsgJIAAgKIAAgKIAKAAIAAAKIAAAKgAAPgTIAAgKIAKAAIAAAKg");
	this.shape_7.setTransform(7.8499,-6.2857,3.1428,3.1428);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33BE30").s().p("AAPAUIAAgKIAKAAIAAAKgAgOAUIAAgKIAKAAIAAAKgAAZAKIAAgKIAAgJIAKAAIAAAJIAAAKgAAZAKgAgEAKIAAgTIgKAAIgKAAIAAgKIAUAAIAAAKIAJAAIAAATgAgiAKIAAgKIAKAAIAAAKg");
	this.shape_8.setTransform(1.5643,-15.7142,3.1428,3.1428);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F9A1C").s().p("AAjAeIAAgKIAKAAIAAAKgAAPAUIAAgKIAKAAIAAAKgAAZAKIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAAFAKIAAgKIAKAAIAAAKgAgiAKIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAgOAAIAAgJIAAgKIAKAAIAAATgAAjgJIAAgKIAKAAIAAAKgAgEgTIAAgKIAJAAIAAAKgAgEgTg");
	this.shape_9.setTransform(1.5643,-12.5714,3.1428,3.1428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.help = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// help
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("AgdAeIAAgUIgUAAIAAgTIgUAAIAAgUIAUAAIAAAUIAUAAIAAATIBPAAIAAAUgAAyAKIAAgTIAUAAIAAATgAAyAKg");
	this.shape.setTransform(2,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF290D").s().p("ADmBGIAAgUIgUAAIAAgUIgUAAIAAgUIgUAAIAAgTIAUAAIAAgUIAUAAIAAgUIAUAAIAAgUIFAAAIAACLgAHCAyIAUAAIAAgUIAoAAIAAgUIgoAAIAAgnIAoAAIAAAnIAUAAIAAgnIgUAAIAAgUIg8AAgAGaAeIAAAUIAUAAIAAhPIgUAAIAAgUIgoAAIAAAUIgUAAIAABPIAUAAIAAgUgAEOgdIAUAAIAABPIAUAAIAAhPIAUAAIAAgUIg8AAgAolBGIAAiLIFAAAIAAAUIAUAAIAAAUIAUAAIAAAUIAUAAIAAATIgUAAIAAAUIgUAAIAAAUIgUAAIAAAUgAldAyIAUAAIAAgUIAoAAIAAgUIAUAAIAAgnIgUAAIAAAnIgoAAIAAgnIAoAAIAAgUIg8AAgAmFAeIAAAUIAUAAIAAhPIgUAAIAAgUIgoAAIAAAUIAoAAIAAAnIgoAAIAAgnIgUAAIAABPIAUAAIAAgUgAoRgdIAUAAIAABPIAUAAIAAhPIAUAAIAAgUIg8AAgAFyAKIAAgnIAoAAIAAAng");
	this.shape_1.setTransform(0,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJEOIAAgUIgUAAIAAgUIgUAAIgUAAIAAg8IAUAAIAAAUIAUAAIAAh4IAnAAIAABQIA8AAIAAAUIAUAAIAABQIgUAAIAAAUgADmCqIAAgUIFAAAIAAiMIlAAAIAAgTIFUAAIAACzgAo5CqIAAizIFUAAIAAATIlAAAIAACMIFAAAIAAgUIAUAAIAAAUIgUAAIAAAUgADSCWIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAAUgAHCCCIAAhkIA8AAIAAAUIAUAAIAAAoIgUAAIAAgoIgoAAIAAAoIAoAAIAAAUIgoAAIAAAUgAGaCCIAAgUIgoAAIAAAUIgUAAIAAhQIAUAAIAAgUIAoAAIAAAUIAUAAIAABQgAFyBaIAoAAIAAgoIgoAAgAEiCCIAAhQIgUAAIAAgUIA8AAIAAAUIgUAAIAABQgAjRCCIAAgUIAUAAIAAAUgAldCCIAAhkIA8AAIAAAUIgoAAIAAAoIAoAAIAAAUIgoAAIAAAUgAmFCCIAAgUIgoAAIAAAUIgUAAIAAhQIAUAAIAAAoIAoAAIAAgoIgoAAIAAgUIAoAAIAAAUIAUAAIAABQgAn9CCIAAhQIgUAAIAAgUIA8AAIAAAUIgUAAIAABQgACqBuIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAAUgAi9BuIAAgUIAUAAIAAAUgAi9BugAipBaIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAAUgAkhBaIAAgoIAUAAIAAAogAkhBagACqBGIAAgUIAUAAIAAAUgAC+AyIAAgUIAUAAIAAAUgAC+AygAjRAyIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAAUgADSAeIAAgUIAUAAIAAAUgADmAKgAgxipIAAgoIgUAAIAAgUIAUAAIAAgUIAUAAIAAgUIAUAAIAAAUIATAAIAAAUIAUAAIAAAUIgUAAIAAAog");
	this.shape_2.setTransform(0,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#543847").s().p("AAUGGIAAgoIgUAAIAAgUIgTAAIAAgUIATAAIAAAUIAUAAIAAAUIAUAAIAAAUIBQAAIAAgUIAUAAIAAAogACMFeIAAgUIAAhQIgUAAIAAgUIg8AAIAAhQIgoAAIAAgUIAoAAIAAAUIAUAAIAAA8IAoAAIAAAUIAUAAIAAAUIAUAAIAABkgACMFegAgnE2IAAg8IAUAAIAAA8gAAAEOIAAgUIgTAAIAAgUIATAAIAAhQIAUAAIAAB4gABQBuIAAgUIAUAAIAAAUgAgnBuIAAgUIgUAAIAAgUIAUAAIAAAUIAUAAIAAAUgABkBaIAAgUIAUAAIAAAUgABkBagAAUBaIAAg8IAUAAIAAA8gAgThFIAAg8IATAAIAAAoIA8AAIAAgoIAUAAIAAA8gABQiBIAAgUIAUAAIAAAUgABQiBgAgniBIAAgUIAUAAIAAAUgAgTiVIAAgUIATAAIAAAUgAgTiVgAAoipIAAgUIAUAAIAAAUgAAAipIAAgUIAUAAIAAAUgAAAipgAAUi9IAAgUIAUAAIAAAUgAiLkNIAAgUIgUAAIAAgUIAUAAIAAAUIAoAAIAAAUgAh3k1IAAgUIgUAAIAAgUIgUAAIAAgoIAUAAIAAAoIAUAAIAAAUIA8AAIAAAUg");
	this.shape_3.setTransform(-5,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#523745").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_4.setTransform(2,-6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AhbATIAzgdIAPAZIgaAOIAPAaIgaAPgAAzgdIgZAPIgPgaIA0gdIAdAzIgaAPg");
	this.shape_5.setTransform(-2.725,-43.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AhDBGIgZAQIgPgaIAZgQIAagPIAagOIgPgZIgPgaIgzAeIgPgaIAzgeIgPgZIAagPIAPAaIBNgtIAPAaIgzAeIAOAZIAPAaIAZgOIAagQIAPAaIAagPIAOAaIgZAOIAPAaIgaAPIAPAZIhOAtIgPgaIgyAegAAKAaIAOAaIAagQIgOgZg");
	this.shape_6.setTransform(-0.725,-41.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhXBWIAagQIAdA0IAzgeIAOAaIhLAsgABgAwIAagPIgPgaIAZgOIAfAyIg0AegAihgrIBMgsIAQAZIg0AeIAPAaIAdAyIgZAQgAAPAaIAagPIAPAZIgaAQgAhCAEIAagOIAPAZIgZAOgAALgoIAagPIAOAbIgZAOgABNgsIgdgzIgPgaIhMAtIgQgaIBmg8IBLCBIgZAPg");
	this.shape_7.setTransform(-1.25,-41.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-57.5,114,106.5);


(lib.pipeUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pipe
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,400);


(lib.pipeDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,400);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg
	this.instance = new lib.bgc();
	this.instance.setTransform(0,0,0.7111,0.7111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1016.2,512);


(lib.slime_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {jump:19,fall:49};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_18 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_48 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(30).call(this.frame_48).wait(35).call(this.frame_83).wait(1));

	// slime
	this.instance = new lib.slime("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.3333},4).to({scaleY:1},5).to({scaleX:1.3333},5).to({scaleX:1},4).wait(1).to({rotation:-29.9992},0).to({scaleY:1.3333,rotation:360},15,cjs.Ease.circInOut).to({scaleY:1,rotation:720},14,cjs.Ease.circInOut).wait(1).to({rotation:720.0009},0).to({scaleX:0.9999,scaleY:0.9999,rotation:615.0022,x:-50,y:-40},4,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,rotation:-719.9991,x:0,y:1000},30,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-58.4,94.7,1073.4);


(lib.sndEnabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sndCtr
	this.instance = new lib.disc("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AiVBkIAAjHIErAAIAADHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:0}}]},1).to({state:[{t:this.instance,p:{y:2}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-10,30,22);


(lib.sndDisabled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sndCtr
	this.instance = new lib.disabled("synched",0);

	this.instance_1 = new lib.disc("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AiVBkIAAjHIErAAIAADHg");
	this.shape.setTransform(0,0,1,1.41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:0}}]},1).to({state:[{t:this.instance_1,p:{y:2}},{t:this.instance,p:{y:2}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,32);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.instance = new lib.btni("synched",0);
	this.instance.setTransform(58,35,1,1,0,0,0,58,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewX:180,y:29},0).wait(1).to({skewX:0,y:39},0).wait(1).to({y:35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,116,80);


(lib.shining = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// shine
	this.instance = new lib.shine("synched",0);
	this.instance.setTransform(-1,4.2,1,1,0,0,0,33.9,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-50.3,109.1,109);


(lib.medals = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// medals
	this.instance = new lib.carrot("synched",0);

	this.instance_1 = new lib.golden_carrot("synched",0);

	this.instance_2 = new lib.diamond("synched",0);
	this.instance_2.setTransform(0,0,0.7273,0.7261);

	this.instance_3 = new lib.nether_star("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.pipesGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pipes
	this.pd = new lib.pipeDown("synched",0);
	this.pd.name = "pd";
	this.pd.setTransform(26,160,1,1,0,0,0,26,160);

	this.pu = new lib.pipeUp("synched",0);
	this.pu.name = "pu";
	this.pu.setTransform(26,560,1,1,0,0,0,26,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pu},{t:this.pd}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,800);


(lib.bg_day = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_799 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(799).call(this.frame_799).wait(1));

	// bg
	this.instance = new lib.bg("synched",0);
	this.instance.setTransform(508.1,256,1,1,0,0,0,508.1,256);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-220.1},799).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-728.2,0,1744.4,512);


(lib.scoreBoard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// best
	this.best = new cjs.Text("0", "16px 'Mojang'", "#FFFFFF");
	this.best.name = "best";
	this.best.textAlign = "center";
	this.best.lineHeight = 18;
	this.best.lineWidth = 96;
	this.best.parent = this;
	this.best.setTransform(0,58.95);

	this.timeline.addTween(cjs.Tween.get(this.best).wait(1));

	// score
	this.score = new cjs.Text("0", "44px 'Mojang'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 46;
	this.score.lineWidth = 96;
	this.score.parent = this;
	this.score.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// medal
	this.medals = new lib.medals();
	this.medals.name = "medals";
	this.medals.setTransform(23.9,-82.65,1.0909,1.0909,0,0,0,21.9,22);

	this.instance = new lib.shining();
	this.instance.setTransform(0,-109,1.495,1.495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.medals}]}).wait(1));

	// board
	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-109.95,35.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-109.95,-56.45,0.5,0.5);

	this.instance_3 = new lib.score_board("synched",0);
	this.instance_3.setTransform(0,0,1.42,1.42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// steve
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["flappy_slime_atlas_1"],9);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.085,0.049,-0.049,0.085,-6.9,-56.8)).s().p("AoNDgIHJsXIJTFYInKMXg")
	}.bind(this);
	this.shape.setTransform(16.7,-78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scoreBoard, new cjs.Rectangle(-109.9,-164,220,255.2), null);


(lib.endGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// btn
	this.instance = new lib.play();
	this.instance.setTransform(-58,-326.35);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.play(), 3);

	this.playAgain = new lib.play();
	this.playAgain.name = "playAgain";
	this.playAgain.setTransform(-58,66.4);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.playAgain}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:66.4},35,cjs.Ease.bounceOut).wait(1));

	// end
	this.scoreBoard = new lib.scoreBoard();
	this.scoreBoard.name = "scoreBoard";
	this.scoreBoard.setTransform(0,-430);

	this.timeline.addTween(cjs.Tween.get(this.scoreBoard).to({y:-37.6},35,cjs.Ease.bounceOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,-594,220,734.4);


// stage content:
(lib.flappy_slime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sndD
	this.snd_d = new lib.sndDisabled();
	this.snd_d.name = "snd_d";
	this.snd_d.setTransform(260,30);
	new cjs.ButtonHelper(this.snd_d, 0, 1, 2, false, new lib.sndDisabled(), 3);

	this.timeline.addTween(cjs.Tween.get(this.snd_d).wait(1));

	// sndE
	this.snd_e = new lib.sndEnabled();
	this.snd_e.name = "snd_e";
	this.snd_e.setTransform(260,30);
	new cjs.ButtonHelper(this.snd_e, 0, 1, 2, false, new lib.sndEnabled(), 3);

	this.timeline.addTween(cjs.Tween.get(this.snd_e).wait(1));

	// score
	this.score = new cjs.Text("0", "48px 'Mojang'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 50;
	this.score.lineWidth = 80;
	this.score.parent = this;
	this.score.setTransform(144,31);
	this.score.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// bird
	this.slime = new lib.slime_1();
	this.slime.name = "slime";
	this.slime.setTransform(144,325.8);

	this.timeline.addTween(cjs.Tween.get(this.slime).wait(1));

	// help
	this.title = new lib.title("synched",0);
	this.title.name = "title";
	this.title.setTransform(142,119.95,1.3397,1.2726);

	this.help = new lib.help("synched",0);
	this.help.name = "help";
	this.help.setTransform(201,276.1,1,1,0,0,0,57,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.help},{t:this.title}]}).wait(1));

	// bg
	this.bg = new lib.bg_day();
	this.bg.name = "bg";
	this.bg.setTransform(504,256,1,1,0,0,0,504,256);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(144,256,872.2,256);
// library properties:
lib.properties = {
	id: '1CD63061EE452A43B88CE02F08B23BB6',
	width: 288,
	height: 512,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/flappy_slime_atlas_1.png", id:"flappy_slime_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1CD63061EE452A43B88CE02F08B23BB6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;