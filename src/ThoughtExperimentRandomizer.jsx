import React, { useState } from 'react';
import './ThoughtExperimentRandomizer.css';

function ThoughtExperimentRandomizer() {
  const thoughtExperiments = [
    "Picture yourself at the Big Bang 13.8 billion years ago. You’re expanding in every direction at the speed of light, turning into quarks, protons, electrons, and other elementary particles. Then, you cool down and form hydrogen and helium atoms floating in nearly empty space. Feel the force of gravity clumping you together to form stars.",
    "Picture a star exploding at the end of its life five billion years ago, spewing gaseous clouds and particulate matter into the vastness of the universe. Then, gravity forces some of that stardust together and it forms our Sun and Solar System. Visualize everything and everyone on Earth as made up of elements that originated from the same stars that blew up billions of years ago. ",
    "Imagine every grain of sand on Earth representing a star, and then imagine that many stars multiplied by ten. That’s how many stars there are in the universe—about one septillion. Picture the trillions of miles between each star and the 100 billion trillion planets orbiting those stars.",
    "Expand your awareness in a series of steps, from your body to the room you’re in to the building you’re in to your country to your continent, Earth, our Solar System, the Milky Way galaxy, the Virgo Cluster of galaxies, the Virgo Supercluster of galaxies, and beyond to the entire universe (94 light-years, or 540 sextillion miles, in diameter). Then, expand your awareness even further, to a multiverse filled with an infinite number of universes. Allow your mind to merge with that ever-expanding multiverse and everything in it. ",
    "Think about getting pulled into a black hole and somehow maintaining individual consciousness, even though there’s infinite density at the center of the hole and the atoms of your body are demolished. What’s it like to have zero mass and be in a place where time and space are obliterated? ",
    "Contemplate the fact that none of your body’s 30 trillion cells (apart from your brain cells) will be the same seven years from now. Visualize your stomach cells being replaced every week, and your skin cells every month. Imagine your liver cells completely changing every six weeks. Picture the red blood cells that carry oxygen to every part of your body being replaced every four months.",
    "Instead of picturing yourself as you are now, try to visualize yourself as your grandmother or grandfather. Then try to picture yourself as your grandparent’s grandparent. Keep going back a couple of generations at a time for 195,000 years—when all available evidence indicates that human beings first came into existence.",
    "Think about how you’re related to your siblings because you share the same parents, and to your cousins because you share the same grandparents. Then visualize going back about 10,000 generations to find the first human—the common ancestor shared by all eight billion people alive today, including your colleagues, customers, competitors, and shareholders.",
    "Consider that about 50 percent of the DNA of a banana is identical to human DNA. That’s because one of your “very great-grandparents” and one of the banana’s “very great-grandparents” was, at some point in the distant past, the same organism. Imagine that, you’re related to a piece of fruit!"
  ];

  const [currentPrompt, setCurrentPrompt] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomPrompt = () => {
    setIsAnimating(true);
    
    // Display random prompts rapidly for visual effect
    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * thoughtExperiments.length);
      setCurrentPrompt(thoughtExperiments[randomIndex]);
      counter++;
      
      if (counter > 10) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);
  };

  return (
    <div className="container">
      <h1>Thought Experiment Randomizer</h1>
      
      <div className="prompt-container">
        <p className={isAnimating ? 'animating' : ''}>
          {currentPrompt || "Click the button to get a random thought experiment."}
        </p>
      </div>
      
      <button 
        onClick={getRandomPrompt}
        disabled={isAnimating}
      >
        {isAnimating ? "Selecting..." : "Get Random Prompt"}
      </button>
      
      <p className="footer">
        Choose a random prompt from your collection of thought experiments
      </p>
    </div>
  );
}

export default ThoughtExperimentRandomizer;