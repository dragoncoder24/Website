const quotes = [
    "This is the day you will always remember as the day you almost caught Captain Jack Sparrow!",
    "But you have heard of me.",
    "Why is the rum always gone?",
    "Savvy?",
    "I’ve got a jar of dirt! I’ve got a jar of dirt, and guess what’s inside it!",
    "Not all treasure is silver and gold, mate.",
    "The problem is not the problem. The problem is your attitude about the problem.",
    "Me? I’m dishonest. And a dishonest man you can always trust to be dishonest. Honestly.",
    "It’s the honest ones you want to watch out for, because you can never predict when they’re going to do something incredibly stupid.",
    "Bring me that horizon.",
    "If you were waiting for the opportune moment, that was it.",
    "I’m disinclined to acquiesce to your request. Means 'no'.",
    "Did everyone see that? Because I will not be doing it again.",
    "The world's still the same. There's just... less in it.",
    "I’m an officer and a gentleman!",
    "The only rules that really matter are these: what a man can do and what a man can’t do.",
    "I love those moments. I like to wave at them as they pass me by.",
    "You like pain? Try wearing a corset.",
    "Take what you can, give nothing back!",
    "Why fight when you can negotiate?",
    "Crazy people don’t know they’re crazy. I know I’m crazy, therefore I’m not crazy, isn’t that crazy?",
    "I do tell the truth quite a lot, yet people are always surprised.",
    "Close your eyes and pretend it's all a bad dream. That's how I get by.",
    "Nobody move! I dropped my brain!",
    "My compass is unique. It points to the thing you want most in this world.",
    "Hide the rum!",
    "Why should I sail with any of you? Four of you have tried to kill me, and one of you succeeded.",
    "Darling, I am the original.",
    "I wash my hands of this weirdness.",
    "If you had a sister and a dog... I'd choose the dog.",
    "We’re lost! And we’re found! And we’re hungry!",
    "I have a wedding to attend!",
    "Did you just call me Jack? It’s Captain. Captain Jack Sparrow.",
    "My tremendous intuitive sense of the female creature tells me you are troubled.",
    "You're the one who bought it!",
    "Clearly, you've never been to Singapore.",
    "Ten years is a long time, mate. Especially if you’re a lobster.",
    "Better to not know which moment may be your last.",
    "Every morsel of your entire being alive to the infinite mystery of it all.",
    "Gentlemen! You shall always remember this as the day that you almost caught Captain—",
    "If I don't have the key, I can't open what I don't have that it opens.",
    "So what is it that I don't have that the key opens?",
    "No, 'dead' is more like 'gone'.",
    "You've been there? To the World’s End?",
    "You can't beat me, I'm already dead!",
    "Drink up me hearties, yo ho!",
    "How's the sister?",
    "A lot of ice... but it’s very pretty.",
    "I thought you were supposed to be dead. Well, I am. But I’m also a Captain.",
    "Let us not, dear friends, forget our dear friends the cuttlefish.",
    "I have no sympathy for any of you!",
    "You’re not making any sense at all, mate.",
    "I feel a sudden urge to jump overboard!",
    "If you win, you get to live. If you lose, you’re dead. Come to think of it, I’d rather just be lucky.",
    "No more than usual.",
    "The Black Pearl is freedom.",
    "I'm a man of my word... mostly.",
    "You look familiar. Have I ever threatened you before?",
    "Did I mention I’m a Captain?",
    "You can always trust a dishonest man.",
    "You may throw my hat, if you like.",
    "I think I’ve seen enough of the world for one day.",
    "You know, for a man who’s been dead, you’re not very quiet.",
    "I’ve always been a bit of a romantic.",
    "I’m not a hero, I’m a survivor.",
    "I don’t need a map. I have a compass.",
    "If I may make a suggestion? Run!",
    "No survivors? Then where do the stories come from, I wonder?",
    "I’m currently between ships.",
    "You’ve stolen me and I’m here to take myself back.",
    "Why is it that when I have a plan, it involves you being an idiot?",
    "Your scent is quite refreshing... like a jasmine flower after a rainstorm.",
    "You're not a eunuch, are you?",
    "A wedding? I love weddings! Drinks all around!",
    "Now... bring me that horizon!",
    "Complications arose, ensued, and were overcome.",
    "You're the worst pirate I've ever heard of.",
    "Lord Cutler Beckett, I'm here to negotiate the cessation of hostilities.",
    "It's not just a keel and a hull and a deck and sails. That's what a ship needs.",
    "My spirit will live on.",
    "The pirates are all being rounded up! No one is safe!",
    "If you're going to kill me, then kill me. But don't you dare insult me.",
    "I'm not looking for trouble. Trouble usually finds me.",
    "One word, love: curiosity.",
    "I'm a pirate, and a pirate's life for me.",
    "Stop blowing holes in my ship!",
    "You can't just leave me here!",
    "I've got a feeling this is going to be a very long day.",
    "There will be no living with her after this.",
    "Think you can outrun the world?",
    "I am Captain Jack Sparrow. The original, some might say.",
    "I am not confused. I am exploring options aggressively.",
    "Luck improves dramatically when you act like it owes you.",
    "This is either going very well or about to become a story.",
    "Retreating sideways remains a valid strategy."
];

// 1. NAVIGATION LOGIC
function showView(viewId) {
    const views = document.querySelectorAll('.page-view');
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById('view-' + viewId);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Randomly update the header quote when switching views
    updateHeaderQuote();
}

// 2. COMPASS LOGIC
document.addEventListener('mousemove', (e) => {
    const needle = document.getElementById('needle');
    const rect = needle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    needle.style.transform = `rotate(${angle * (180 / Math.PI) + 90}deg)`;
});

// 3. RUM & QUOTES
let rumLevel = 100;

function drinkRum() {
    const bar = document.getElementById('rum-bar');
    const status = document.getElementById('rum-status');
    const speak = document.getElementById('jack-speak');

    if (rumLevel > 0) {
        rumLevel -= 10;
        bar.style.width = rumLevel + "%";
        status.innerText = rumLevel;
        speak.innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    } else {
        speak.innerText = "The rum is truly gone. This is a tragedy of the highest order.";
    }
}

function refillRum() {
    rumLevel = 100;
    document.getElementById('rum-bar').style.width = "100%";
    document.getElementById('rum-status').innerText = "100";
    document.getElementById('jack-speak').innerText = "Ah, much better! Bring me that horizon!";
}

// 4. IDENTITY POSTER LOGIC
let currentBounty = 100;
function updatePoster() {
    const nameInput = document.getElementById('name-input').value;
    document.getElementById('poster-name').innerText = nameInput || "PIRATE NAME";
}

function commitCrime() {
    currentBounty += 500;
    document.getElementById('reward-total').innerText = currentBounty.toLocaleString();
    const crimes = ["Stole a ship", "Escaped Port Royal", "Automated a tedious task", "Broke a straight line", "Poked the impossible"];
    const crime = crimes[Math.floor(Math.random() * crimes.length)];
    document.getElementById('jack-speak').innerText = `You just ${crime}! Your bounty grows!`;
}

// 5. NEW QUOTE-CENTRIC FEATURES
function mutterQuote() {
    const speak = document.getElementById('jack-speak');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    speak.innerText = `The Captain remarks: "${randomQuote}"`;
}

function updateHeaderQuote() {
    const headerQuote = document.getElementById('header-quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    headerQuote.style.opacity = 0;
    setTimeout(() => {
        headerQuote.innerText = `"${randomQuote}"`;
        headerQuote.style.opacity = 1;
    }, 500);
}

function interactBounty(url) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Custom console mutter
    console.log(`%c "${randomQuote}" `, `background: #2c1e16; color: #dcd0a7; font-family: "Pirata One"; font-size: 16px;`);
    window.open(url, '_blank');
}

// 6. Candle (NIGHT MODE)
function toggleLantern() {
    document.getElementById('hull').classList.toggle('night-mode');
}



// Auto-mutter every 20 seconds
setInterval(updateHeaderQuote, 20000);
// Detect DevTools (simple approach using timing + dimensions)
let devtoolsOpen = false;

function detectDevTools() {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            triggerDevReward();
        }
    } else {
        devtoolsOpen = false;
    }
}

// Reward function
function triggerDevReward() {
    console.log('%cAh, a curious mind! Here is a gift just for you.',
        'background: #2c1e16; color: #dcd0a7; font-family: "Pirata One"; font-size: 20px; padding: 10px; border: 2px solid #dcd0a7;');

    // Example “reward” on the page: show a hidden button
    const hiddenBtn = document.createElement('button');
    hiddenBtn.innerText = "Secret Jack Button";
    hiddenBtn.className = "pirate-btn";
    hiddenBtn.onclick = () => alert("Why fight when you can negotiate... or mislead, trick, or vanish entirely?");
    document.body.appendChild(hiddenBtn);
}

// Check every 500ms
setInterval(detectDevTools, 500);
