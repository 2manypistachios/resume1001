import React, {Component} from "react";
import chroma from "chroma-js";
import P5Wrapper from 'react-p5-wrapper';

function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(60);
    system = new ParticleSystem(p.createVector(p.width/2, 50));
    

  };

  p.draw = function () {
    p.background(51);
    system.addParticle();
    system.run();
  }
  
  // A simple Particle class
  var Particle = function(position) {
    this.acceleration = p.createVector(0, 0.05);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    this.position = position.copy();
    this.lifespan = 300;
  };
  
  Particle.prototype.run = function() {
    this.update();
    this.display();
  };
  
  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  
  // Method to display
  Particle.prototype.display = function() {
    p.stroke(200, this.lifespan);
    p.strokeWeight(2);
    p.fill(127, this.lifespan);
    p.ellipse(this.position.x, this.position.y, 12, 12);
  };
  
  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    return this.lifespan < 0;
  };
  
  var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };
  
  ParticleSystem.prototype.addParticle = function() {
    if (this.particles.length < 10) {
      this.particles.push(new Particle(this.origin));
    }
  };
  
  ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var particlesys = this.particles[i];
      particlesys.run();
      if (particlesys.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };
  
};

export default class Balloons extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			stateSketch: sketch,
		};
	}

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch}/>
			</div>
		);
	}
}
