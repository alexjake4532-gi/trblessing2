// --- VIDEO DATA ARRAY ---
const videoData = [
    {
        title: "Sarasas Witaed Exams",
        description: "A breakdown of the Semester 1 final exams, including the core subjects, languages, and the four-day battle plan.",
        url: "Sarasas_Witaed_Exams.mp4",
        type: "file"
    },
    {
        title: "Cognitive Pacing: Exam Schedule",
        description: "Explains how schools use cognitive load scheduling and strategic review blocks to keep student stamina high.",
        url: "Cognitive_Pacing__The_Engineering_of_an_Exam_Schedule.mp4",
        type: "file"
    },
    {
        title: "Inside a 4th Grade Curriculum",
        description: "Details the advanced STEM requirements, extreme language load, and the logistical marathon of the tests.",
        url: "Inside_a_4th_Grade_International_Curriculum.mp4",
        type: "file"
    }
];

const studyQuestions = { science: [], language: [], socialStudies: [], mathematics: [], healthEducation: [], phonics: [] };

const vocabularyData = {
    language: [
        {
            groupTitle: "Unit 5: Food & The World Around Us",
            words: [
                { word: "Sugar cane", definition: "A tall grass grown in tropical regions that is a major source of sugar.", sentence: "Farmers harvest the sweet sugar cane to make the sugar we use for baking." },
                { word: "Wheat", definition: "A cereal plant that is ground into flour for making bread, pasta, and baked goods.", sentence: "The golden fields of wheat waved gently in the afternoon wind." },
                { word: "Cinnamon", definition: "An aromatic spice made from the peeled, dried, and rolled bark of a Southeast Asian tree.", sentence: "She sprinkled cinnamon over her warm apple pie to give it extra flavor." },
                { word: "Butter", definition: "A pale yellow edible fatty substance made by churning cream.", sentence: "The hot toast easily melted the thick layer of butter." },
                { word: "Vanilla", definition: "A sweet substance extracted from the pod of a tropical orchid, used to flavor sweet foods.", sentence: "They added a few drops of pure vanilla extract to the cake batter." },
                { word: "Ingredients", definition: "Any of the foods or substances that are combined to make a particular dish.", sentence: "Before starting to cook, she made sure she had all the necessary ingredients." },
                { word: "Bark", definition: "The tough, protective outer sheath of the trunk and branches of a tree.", sentence: "The tree's rough bark provided excellent camouflage for the climbing insects." },
                { word: "Plantation", definition: "A large estate or farm on which crops such as coffee, sugar, and tobacco are cultivated.", sentence: "The workers spent all morning picking fresh coffee beans on the plantation." },
                { word: "Steamship", definition: "A ship that is propelled by a steam engine.", sentence: "In the 1800s, it took weeks for a steamship to cross the wide Atlantic ocean." },
                { word: "Spoil", definition: "To diminish or destroy the value or quality of; food becoming unfit for eating.", sentence: "If you leave the milk out in the heat, it will spoil very quickly." },
                { word: "Leopard", definition: "A large, solitary cat that has a yellowish-brown coat with dark spots.", sentence: "The silent leopard rested high in the branches, watching the plains below." },
                { word: "Gather", definition: "To come together; to assemble or accumulate.", sentence: "The family will gather around the large table to enjoy a holiday meal." },
                { word: "Introduce", definition: "To make someone known by name to another in person.", sentence: "I would like to introduce my best friend to my parents this weekend." },
                { word: "Peel", definition: "To remove the outer covering or skin from a fruit or vegetable.", sentence: "Please use a sharp knife to carefully peel the potatoes for the soup." },
                { word: "Coax", definition: "To persuade someone gradually or by flattery to do something.", sentence: "He had to coax the frightened kitten out from underneath the sofa." }
            ]
        },
        {
            groupTitle: "Unit 6: Food and Farming",
            words: [
                { word: "Convenient", definition: "Fitting in well with a person's needs, activities, and plans; involving little trouble.", sentence: "The new supermarket near our house is very convenient for buying groceries." },
                { word: "Export", definition: "To send goods or services to another country for sale.", sentence: "Many tropical countries export fresh bananas and pineapples to colder regions." },
                { word: "Local", definition: "Relating or restricted to a particular area or one's neighborhood.", sentence: "We always try to buy vegetables from our local farmers to support the community." },
                { word: "Process", definition: "To perform a series of mechanical or chemical operations on something to change or preserve it.", sentence: "Factories process raw wheat to turn it into the fine white flour we buy." },
                { word: "Package", definition: "To put into a box or wrapping, especially for transport or sale.", sentence: "Workers carefully package the delicate berries to protect them during shipping." },
                { word: "Farmer's market", definition: "A food market where local farmers sell fruit and vegetables directly to consumers.", sentence: "Every Saturday morning, she buys fresh organic tomatoes at the farmer's market." },
                { word: "Agriculture", definition: "The science or practice of farming, including cultivation of the soil for growing crops.", sentence: "Modern agriculture utilizes advanced tractors and machines to increase food production." },
                { word: "Corporate farm", definition: "A large-scale agricultural operation run by a major business company.", sentence: "The corporate farm produced thousands of tons of corn every single harvest season." },
                { word: "Decrease", definition: "To make or become smaller or fewer in size, amount, intensity, or degree.", sentence: "Recycling at home helps to decrease the amount of trash sent to the landfill." },
                { word: "Century", definition: "A period of one hundred years.", sentence: "Over the last century, human technology has advanced incredibly fast." },
                { word: "Chemical", definition: "A distinct compound or substance, often artificially prepared or purified.", sentence: "Some farmers use a chemical spray to keep harmful bugs away from their crops." },
                { word: "Grocery stores", definition: "A retail shop that primarily sells food, either fresh or preserved.", sentence: "Mom went to three different grocery stores to find the exact brand of pasta she wanted." },
                { word: "Food labels", definition: "A panel found on a package of food which contains a variety of information about the nutritional value.", sentence: "Always read the food labels to check how much sugar is inside your favorite snacks." },
                { word: "Organic food", definition: "Food produced by methods that comply with the standards of organic farming, avoiding artificial chemicals.", sentence: "Organic food is often considered healthier because it is grown without harsh pesticides." },
                { word: "Whole food", definition: "Food that has been processed or refined as little as possible and is free from additives.", sentence: "Eating a diet based on whole food like fresh vegetables and grains is excellent for your body." }
            ]
        },
        {
            groupTitle: "Units 7 & 8: Art and Artists",
            words: [
                { word: "Sketch", definition: "A rough or unfinished drawing or painting, often made to assist in making a more finished picture.", sentence: "The artist quickly drew a sketch of the bird before it flew away." },
                { word: "Pastels", definition: "A crayon made of powdered pigments bound with gum or resin, used for drawing.", sentence: "She used soft blue and pink pastels to create a beautiful drawing of the sunset." },
                { word: "Canvas", definition: "A strong, unbleached cloth used as a surface for oil painting.", sentence: "The painter stared at the blank white canvas, waiting for inspiration to strike." },
                { word: "Paintbrushes", definition: "A brush used for applying paint to a surface.", sentence: "He cleaned his thick paintbrushes with water after finishing the large mural." },
                { word: "Shapes", definition: "The external form, contours, or outline of someone or something.", sentence: "The child cut out stars and triangular shapes from the colored construction paper." },
                { word: "String", definition: "Material consisting of threads of cotton, hemp, or other material twisted together.", sentence: "They tied the colorful balloons to the chairs using a long piece of string." },
                { word: "Three-dimensional", definition: "Having or appearing to have length, breadth, and depth.", sentence: "The artist carved a stunning three-dimensional sculpture out of solid marble." },
                { word: "Prodigy", definition: "A person, especially a young one, endowed with exceptional qualities or abilities.", sentence: "The young musical prodigy could play complex piano pieces by the age of five." },
                { word: "Street painter", definition: "An artist who creates visual art directly on public pavement or sidewalks.", sentence: "The talented street painter drew an amazing 3D waterfall right on the concrete path." },
                { word: "Carpenter", definition: "A person who makes and repairs wooden objects and structures.", sentence: "The skilled carpenter built a sturdy oak dining table for the family." },
                { word: "Sculptor", definition: "An artist who makes sculptures.", sentence: "The sculptor used sharp tools to carefully chisel the rough stone into a beautiful face." },
                { word: "Complex", definition: "Consisting of many different and connected parts.", sentence: "The clock had a highly complex mechanism of tiny spinning gears inside." },
                { word: "Washable", definition: "Able to be washed without being damaged or having the colors fade.", sentence: "Luckily, the children were using washable paint, so the stains came right out of their clothes." },
                { word: "Combines", definition: "To unite or merge for a common purpose.", sentence: "The recipe combines sweet and sour flavors perfectly." },
                { word: "Fascination", definition: "The state of feeling an intense interest in something.", sentence: "Her deep fascination with the ocean led her to become a marine biologist." },
                { word: "Exhibition", definition: "A public display of works of art or items of interest, held in an art gallery or museum.", sentence: "The new photography exhibition opens at the downtown art gallery next week." },
                { word: "Frame", definition: "A rigid structure that surrounds or encloses something such as a picture, door, or windowpanes.", sentence: "He placed his favorite family photograph into a beautiful wooden frame." },
                { word: "Landscape", definition: "A picture representing an area of countryside.", sentence: "The artist painted a sweeping landscape of the rolling green hills and valley." },
                { word: "Texture", definition: "The feel, appearance, or consistency of a surface or a substance.", sentence: "You could feel the rough texture of the dried oil paint on the canvas." },
                { word: "Shading", definition: "The darkening or coloring of an illustration or diagram with parallel lines or a block of color.", sentence: "She used delicate pencil shading to make the drawn apple look perfectly round." },
                { word: "Perspective", definition: "The art of drawing solid objects on a two-dimensional surface so as to give the right impression of their height, width, depth, and position in relation to each other.", sentence: "Using proper perspective made the drawn road look like it stretched far into the distance." },
                { word: "Contrast", definition: "The state of being strikingly different from something else in juxtaposition or close association.", sentence: "The bright yellow flower stood out in sharp contrast against the dark green leaves." },
                { word: "Space", definition: "A continuous area or expanse which is free, available, or unoccupied.", sentence: "The modern painting utilized a lot of empty white space to emphasize the single red dot." },
                { word: "Stained", definition: "Marked or discolored with something that is not easily removed.", sentence: "His apron was heavily stained with splatters of blue and green acrylic paint." },
                { word: "Brilliant", definition: "Exceptionally clever or talented; or outstandingly bright.", sentence: "The fireworks exploded in a brilliant flash of neon colors across the night sky." },
                { word: "Pale", definition: "Light in color or having little color.", sentence: "She used a pale pink color to paint the soft flower petals." },
                { word: "Ignore", definition: "Refuse to take notice of or acknowledge; disregard intentionally.", sentence: "Try to ignore the loud construction noises outside while you study for the test." },
                { word: "Worries", definition: "The state of being anxious and troubled over actual or potential problems.", sentence: "He tries not to let his worries about the upcoming math test ruin his weekend." },
                { word: "Famous", definition: "Known about by many people.", sentence: "The famous actor signed autographs for his fans outside the theater." },
                { word: "Speechless", definition: "Unable to speak, especially as the temporary result of shock or some strong emotion.", sentence: "When she saw the surprise birthday party, she was completely speechless." }
            ]
        },
        {
            groupTitle: "Unit 9: City & Society",
            words: [
                { word: "Canal", definition: "An artificial waterway constructed to allow the passage of boats or ships inland.", sentence: "Small boats transport goods up and down the narrow city canal every morning." },
                { word: "Port", definition: "A town or city with a harbor where ships load or unload, especially one where customs officers are stationed.", sentence: "The busy port was filled with massive cargo ships arriving from across the ocean." },
                { word: "Architecture", definition: "The art or practice of designing and constructing buildings.", sentence: "The historic city is famous for its beautiful and ancient stone architecture." },
                { word: "Rickshaw", definition: "A light two-wheeled passenger vehicle drawn by one or more people, chiefly used in Asian countries.", sentence: "The tourists took a scenic ride through the old town in a wooden rickshaw." },
                { word: "Street vendor", definition: "A person who sells food or items to the public from a portable stall or cart.", sentence: "The friendly street vendor sold delicious hot noodles to people walking by." },
                { word: "Antiques", definition: "A collectible object such as a piece of furniture or work of art that has a high value because of its considerable age.", sentence: "They visited a dusty shop to look for rare antiques to decorate their new home." },
                { word: "Souvenirs", definition: "A thing that is kept as a reminder of a person, place, or event.", sentence: "She bought several keychains and postcards as souvenirs from her trip to Japan." },
                { word: "Batik", definition: "A method (originally used in Java) of producing colored designs on textiles by dyeing them, having first applied wax to the parts to be left undyed.", sentence: "The marketplace sold beautiful shirts made from colorful, hand-dyed batik fabric." },
                { word: "Exotic fruits", definition: "Fruits that are not native to a particular area, usually introduced from tropical regions.", sentence: "The market stall was piled high with exotic fruits like dragon fruit and starfruit." },
                { word: "Tuna", definition: "A large and active predatory schooling fish of the mackerel family.", sentence: "Freshly caught tuna is highly prized for making high-quality sushi." },
                { word: "Shrimp", definition: "A small free-swimming crustacean with an elongated body, typically marine and frequently harvested for food.", sentence: "He ordered a bowl of hot soup filled with vegetables and spicy shrimp." },
                { word: "Countless", definition: "Too many to be counted; very many.", sentence: "There are countless stars visible in the sky when you travel far away from city lights." },
                { word: "Congested", definition: "So crowded with traffic or people as to hinder freedom of movement.", sentence: "During rush hour, the main highway becomes heavily congested with cars." },
                { word: "Haggle", definition: "Dispute or bargain persistently, especially over the cost of something.", sentence: "It is customary to haggle with the market sellers to get a better price for clothes." },
                { word: "Banned", definition: "Officially or legally prohibit.", sentence: "Smoking has been completely banned inside all public restaurants." }
            ]
        }
    ],
    phonics: [
        {
            groupTitle: "Blends & Digraphs (tr, sm, ch, sh, st, sw)",
            words: [
                { word: "Train", definition: "Phonics: 'tr' blend. A series of connected vehicles traveling on railways.", sentence: "The fast train carried hundreds of passengers across the country." },
                { word: "Tree", definition: "Phonics: 'tr' blend. A woody perennial plant with a trunk and branches.", sentence: "The tall oak tree provided wonderful shade during the hot summer." },
                { word: "Smile", definition: "Phonics: 'sm' blend. Form one's features into a pleased, kind, or amused expression.", sentence: "The teacher gave the student a warm smile when they answered correctly." },
                { word: "Small", definition: "Phonics: 'sm' blend. Of a size that is less than normal or usual.", sentence: "The small puppy could easily fit inside a shoebox." },
                { word: "Chair", definition: "Phonics: 'ch' digraph. A separate seat for one person, typically with a back and four legs.", sentence: "He pulled up a wooden chair to sit at the dinner table." },
                { word: "Chop", definition: "Phonics: 'ch' digraph. Cut something into pieces with repeated sharp blows of an axe or knife.", sentence: "You must carefully chop the carrots before adding them to the soup." },
                { word: "Ship", definition: "Phonics: 'sh' digraph. A vessel larger than a boat for transporting people or goods by sea.", sentence: "The massive cargo ship sailed slowly across the deep blue ocean." },
                { word: "Wash", definition: "Phonics: 'sh' digraph. Clean with water and, typically, soap or detergent.", sentence: "Don't forget to wash your hands before sitting down to eat dinner." },
                { word: "Star", definition: "Phonics: 'st' blend. A fixed luminous point in the night sky.", sentence: "The bright north star guided the sailors through the dark night." },
                { word: "Fast", definition: "Phonics: 'st' blend. Moving or capable of moving at high speed.", sentence: "The cheetah is famous for being an incredibly fast runner." },
                { word: "Swim", definition: "Phonics: 'sw' blend. Propel the body through water by using the limbs.", sentence: "The children love to swim in the cool pool during the summer." },
                { word: "Sweet", definition: "Phonics: 'sw' blend. Having the pleasant taste characteristic of sugar or honey.", sentence: "The fresh strawberries from the garden were perfectly ripe and sweet." }
            ]
        },
        {
            groupTitle: "Word Skills: Homophones, Synonyms, Rhyming Words",
            words: [
                { word: "Sun", definition: "Homophone of 'Son'. The star around which the earth orbits.", sentence: "The sun provides the light and heat needed for plants to grow." },
                { word: "Son", definition: "Homophone of 'Sun'. A boy or man in relation to either or both of his parents.", sentence: "The proud father taught his son how to ride a bicycle." },
                { word: "See", definition: "Homophone of 'Sea'. Perceive with the eyes; discern visually.", sentence: "If you look closely, you can see a bird hiding in the branches." },
                { word: "Sea", definition: "Homophone of 'See'. The expanse of salt water that covers most of the earth's surface.", sentence: "The pirate ship sailed across the stormy sea searching for treasure." },
                { word: "Right", definition: "Homophone of 'Write'. Morally good, justified, or acceptable; or a direction.", sentence: "Make sure you turn right at the stop sign to find the school." },
                { word: "Write", definition: "Homophone of 'Right'. Mark on a surface with a pen, pencil, or similar implement.", sentence: "Please write your name clearly at the top of your test paper." },
                { word: "Happy", definition: "Synonym of 'Glad'. Feeling or showing pleasure or contentment.", sentence: "The boy was incredibly happy when he received a new puppy." },
                { word: "Glad", definition: "Synonym of 'Happy'. Pleased; delighted.", sentence: "I am so glad that you were able to come to my party." },
                { word: "Quick", definition: "Synonym of 'Fast'. Moving fast or doing something in a short time.", sentence: "The rabbit made a quick jump to escape from the bushes." },
                { word: "Big", definition: "Synonym of 'Large'. Of considerable size, extent, or intensity.", sentence: "The elephant is a very big animal that requires a lot of food." },
                { word: "Large", definition: "Synonym of 'Big'. Of considerable or relatively great size, extent, or capacity.", sentence: "They ordered a large pizza to share with all their friends." },
                { word: "Cat", definition: "Rhymes with 'Hat'. A small domesticated carnivorous mammal.", sentence: "The fluffy cat curled up on the sofa and went to sleep." },
                { word: "Hat", definition: "Rhymes with 'Cat'. A shaped covering for the head worn for warmth or as a fashion item.", sentence: "He wore a wide straw hat to protect his face from the sun." },
                { word: "Day", definition: "Rhymes with 'Play'. A period of twenty-four hours as a unit of time.", sentence: "It was a beautiful sunny day to spend outside at the park." },
                { word: "Play", definition: "Rhymes with 'Day'. Engage in activity for enjoyment and recreation rather than a serious or practical purpose.", sentence: "The children went outside to play tag in the backyard." }
            ]
        }
    ],
    science: [], socialStudies: [], mathematics: [], healthEducation: []
};

const grid = document.getElementById('words-grid');
const tabButtons = document.querySelectorAll('.tab-btn');
const companionPet = document.getElementById('companion-pet');
const motivationBubble = companionPet.querySelector('.motivation-bubble');

const motivationalPhrases = [
    "Whooo's studying hard? You!", "You're a wise owl, keep it up!", "Just a little bit more!",
    "Knowledge is power!", "You're doing great!", "Let's keep going!",
    "Every card makes you smarter!", "Don't stop, you're on a roll!", "Ace that final!"
];

let speechPlaying = false;
let currentUtterance = null;
let currentActiveCardStopBtn = null;
let roamInterval;
let isSleeping = false;

// Flashcard variables
let currentFlashcards = [];
let currentFcIndex = 0;
let flashcardResults = [];

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (modal.id === 'videos-modal') stopVideos();
            if (modal.id === 'flashcard-modal') stopSpecificAudio();
        }
    });
});

function renderVideos() {
    const container = document.getElementById('video-list');
    container.innerHTML = '';
    if (videoData.length === 0) {
        container.innerHTML = `<div class="qa-card placeholder">Send your videos and they will appear here!</div>`;
        return;
    }
    videoData.forEach((vid) => {
        const isFile = vid.type === 'file' || /\.(mp4|webm|ogg)$/i.test(vid.url);
        const player = isFile ? `<video controls preload="metadata" playsinline><source src="${vid.url}">Your browser does not support the video tag.</video>` : `<iframe src="${vid.url}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
        container.innerHTML += `
            <div class="video-card">
                <h3>${vid.title}</h3>
                <p style="color: var(--text-muted); font-size:0.9rem; margin-bottom: 1rem;">${vid.description}</p>
                <div class="video-container">${player}</div>
            </div>`;
    });
}

function stopVideos() {
    document.querySelectorAll('#video-list video').forEach(v => {
        v.pause(); v.removeAttribute('src'); v.load();
    });
    document.getElementById('video-list').innerHTML = '';
}

function createCardElement(item, index, theme) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${(index % 15) * 0.08}s`;
    card.innerHTML = `
        <div class="card-header">
            <span class="word-title">${item.word}</span>
            <div style="display: flex; align-items: center;">
                <button class="audio-btn play-btn" title="Listen" onclick="event.stopPropagation(); playSpecificVoice('${item.word.replace(/'/g, "\\'")}', '${item.definition.replace(/'/g, "\\'")}', '${item.sentence.replace(/'/g, "\\'")}', this)"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
                <button class="audio-btn stop-btn" title="Stop" onclick="event.stopPropagation(); stopSpecificAudio()"><svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg></button>
            </div>
        </div>
        <div class="card-details">
            <div class="card-details-inner">
                <p class="definition">${item.definition}</p>
                <p class="sentence">"${item.sentence}"</p>
            </div>
        </div>
        <span class="word-num">${index + 1}</span>`;
    card.addEventListener('click', () => card.classList.toggle('expanded'));
    return card;
}

// --- FLASHCARD LOGIC ---
function startFlashcards(tabName, groupIndex) {
    const group = vocabularyData[tabName][groupIndex];
    currentFlashcards = group.words;
    currentFcIndex = 0;
    flashcardResults = [];
    document.getElementById('fc-modal-title').innerText = group.groupTitle || group.story || "Flashcards";
    document.getElementById('fc-container').style.display = 'flex';
    document.getElementById('fc-stats').style.display = 'none';
    updateFlashcardUI();
    openModal('flashcard-modal');
}

function updateFlashcardUI() {
    const cardEl = document.getElementById('fc-card');
    const cardInner = document.getElementById('fc-inner');
    cardEl.classList.remove('is-flipped');
    cardInner.classList.remove('flash-success', 'flash-error');
    if (currentFlashcards.length === 0) return;
    
    const item = currentFlashcards[currentFcIndex];
    stopSpecificAudio();
    
    setTimeout(() => {
        document.getElementById('fc-word').innerText = item.word;
        document.getElementById('fc-def').innerText = item.definition;
        document.getElementById('fc-sent').innerText = item.sentence ? `"${item.sentence}"` : "";
        document.getElementById('fc-counter').innerText = `${currentFcIndex + 1} / ${currentFlashcards.length}`;
        document.getElementById('fc-prev').disabled = currentFcIndex === 0;
        document.getElementById('fc-next').disabled = currentFcIndex === currentFlashcards.length - 1;
    }, 150);
}

function prevCard() { if (currentFcIndex > 0) { stopSpecificAudio(); currentFcIndex--; updateFlashcardUI(); } }
function nextCard() { if (currentFcIndex < currentFlashcards.length - 1) { stopSpecificAudio(); currentFcIndex++; updateFlashcardUI(); } }

function markFlashcard(knewIt) {
    const cardInner = document.getElementById('fc-inner');
    flashcardResults[currentFcIndex] = { knewIt: knewIt };
    if (knewIt) cardInner.classList.add('flash-success');
    else cardInner.classList.add('flash-error');

    setTimeout(() => {
        cardInner.classList.remove('flash-success', 'flash-error');
        if (currentFcIndex < currentFlashcards.length - 1) {
            stopSpecificAudio(); currentFcIndex++; updateFlashcardUI();
        } else { showFlashcardStats(); }
    }, 400); 
}

function showFlashcardStats() {
    stopSpecificAudio();
    document.getElementById('fc-container').style.display = 'none';
    document.getElementById('fc-stats').style.display = 'flex';
    let correctCount = 0; let wrongItems = [];
    
    currentFlashcards.forEach((item, index) => {
        const result = flashcardResults[index];
        if (result && result.knewIt === true) correctCount++;
        else wrongItems.push(item);
    });
    
    document.getElementById('fc-score-title').innerText = `You scored ${correctCount} / ${currentFlashcards.length}!`;
    let listHTML = '';
    if (wrongItems.length === 0) listHTML = '<li style="text-align:center; color: var(--accent-sci); font-weight:700; margin-top: 2rem;">Perfect score! You know all the words! 🥳</li>';
    else {
        wrongItems.forEach(w => {
            listHTML += `<li class="fc-wrong-item"><div class="fc-wrong-word">${w.word}</div><div class="fc-wrong-def">${w.definition}</div></li>`;
        });
    }
    document.getElementById('fc-wrong-list').innerHTML = listHTML;
}

function redoFlashcards() { currentFcIndex = 0; flashcardResults = []; document.getElementById('fc-stats').style.display = 'none'; document.getElementById('fc-container').style.display = 'flex'; updateFlashcardUI(); }
function quitFlashcards() { closeModal('flashcard-modal'); stopSpecificAudio(); }

function playFlashcardAudio() {
    stopSpecificAudio();
    const item = currentFlashcards[currentFcIndex];
    const fullText = item.sentence !== '' ? `${item.word}. ${item.definition}. Example: ${item.sentence}` : `${item.word}. Answer: ${item.definition}`;
    currentUtterance = new SpeechSynthesisUtterance(fullText);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Natural')) || voices.find(v => v.lang.startsWith('en'));
    if (preferredVoice) currentUtterance.voice = preferredVoice;
    currentUtterance.rate = 0.95; currentUtterance.pitch = 1.0;
    currentActiveCardStopBtn = document.getElementById('fc-stop-btn');
    currentUtterance.onstart = () => { speechPlaying = true; if(currentActiveCardStopBtn) currentActiveCardStopBtn.style.display = 'flex'; };
    currentUtterance.onend = () => resetAudioState();
    currentUtterance.onerror = () => resetAudioState();
    window.speechSynthesis.speak(currentUtterance);
}

// Render Tabs Function
function renderTab(tabName) {
    grid.innerHTML = '';
    grid.className = `words-grid theme-${tabName}`;

    const qaHeaderWrapper = document.createElement('div');
    qaHeaderWrapper.className = 'section-header-wrapper';
    qaHeaderWrapper.innerHTML = `<h2 class="section-title">Questions to Study</h2>`;
    grid.appendChild(qaHeaderWrapper);
    
    if (studyQuestions[tabName] && studyQuestions[tabName].length > 0) {
        studyQuestions[tabName].forEach((item, index) => {
            const qaCard = document.createElement('div');
            qaCard.className = 'qa-card';
            qaCard.style.animationDelay = `${index * 0.08}s`;
            qaCard.innerHTML = `
                <div class="qa-actions">
                    <button class="audio-btn play-btn" title="Listen" onclick="event.stopPropagation(); playSpecificVoice('${item.q.replace(/'/g, "\\'")}', '${item.a.replace(/'/g, "\\'")}', '', this)"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
                    <button class="audio-btn stop-btn" title="Stop playing" onclick="event.stopPropagation(); stopSpecificAudio()"><svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg></button>
                </div>
                <div class="qa-q">Q: ${item.q}</div><div class="qa-a"><strong>A:</strong> ${item.a}</div>`;
            grid.appendChild(qaCard);
        });
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'qa-card placeholder';
        placeholder.style.animationDelay = '0s';
        placeholder.innerHTML = `Study others first, we're working on this now!`;
        grid.appendChild(placeholder);
    }

    const vocabHeaderWrapper = document.createElement('div');
    vocabHeaderWrapper.className = 'section-header-wrapper';
    vocabHeaderWrapper.style.marginTop = '1.5rem';
    vocabHeaderWrapper.innerHTML = `<h2 class="section-title">Vocabulary</h2>`;
    grid.appendChild(vocabHeaderWrapper);

    if(vocabularyData[tabName]) {
        if (vocabularyData[tabName].length > 0 && (vocabularyData[tabName][0].groupTitle || vocabularyData[tabName][0].story)) {
            let globalCardIndex = 0;
            vocabularyData[tabName].forEach((group, groupIndex) => {
                const titleText = group.groupTitle || group.story;
                const groupTitleEl = document.createElement('div');
                groupTitleEl.className = 'section-header-wrapper';
                groupTitleEl.innerHTML = `
                    <div class="story-title-container">
                        <h3 class="story-title">📖 ${titleText}</h3>
                        <button class="play-fc-btn" onclick="startFlashcards('${tabName}', ${groupIndex})">🗂️ Flashcards</button>
                    </div>`;
                grid.appendChild(groupTitleEl);
                group.words.forEach((item) => {
                    const card = createCardElement(item, globalCardIndex, tabName);
                    grid.appendChild(card);
                    globalCardIndex++;
                });
            });
        } else if (vocabularyData[tabName].length > 0) {
            vocabularyData[tabName].forEach((item, index) => {
                const card = createCardElement(item, index, tabName);
                grid.appendChild(card);
            });
        } else {
            const placeholder = document.createElement('div');
            placeholder.className = 'qa-card placeholder';
            placeholder.style.animationDelay = '0s';
            placeholder.innerHTML = `Coming Soon!`;
            grid.appendChild(placeholder);
        }
    }
}

// Voice Engine
function playSpecificVoice(word, definition, sentence, playButton) {
    stopSpecificAudio();
    const container = playButton.closest('.card, .qa-card');
    const stopBtn = container.querySelector('.stop-btn');
    currentActiveCardStopBtn = stopBtn;

    const fullText = sentence !== '' ? `${word}. ${definition}. Example: ${sentence}` : `${word}. Answer: ${definition}`;
    currentUtterance = new SpeechSynthesisUtterance(fullText);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Natural')) || voices.find(v => v.lang.startsWith('en'));
    if (preferredVoice) currentUtterance.voice = preferredVoice;
    currentUtterance.rate = 0.95; currentUtterance.pitch = 1.0;
    currentUtterance.onstart = () => { speechPlaying = true; stopBtn.style.display = 'flex'; showMotivation(); };
    currentUtterance.onend = () => resetAudioState();
    currentUtterance.onerror = () => resetAudioState();
    window.speechSynthesis.speak(currentUtterance);
}

function stopSpecificAudio() { window.speechSynthesis.cancel(); resetAudioState(); }
function resetAudioState() { if(currentActiveCardStopBtn) { currentActiveCardStopBtn.style.display = 'none'; currentActiveCardStopBtn = null; } speechPlaying = false; currentUtterance = null; }

// Companion Pet Logic
function showMotivation() {
    if (isSleeping) return; 
    const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    motivationBubble.textContent = phrase;
    motivationBubble.classList.add('show');
    setTimeout(() => { motivationBubble.classList.remove('show'); }, 3500);
}

function roamPet() {
    if (isDraggingPet || isSleeping) return;
    if (!motivationBubble.classList.contains('show') && Math.random() < 0.25) showMotivation();
    const padding = 100;
    const maxX = window.innerWidth - padding;
    const maxY = window.innerHeight - padding;
    const targetX = Math.max(20, Math.floor(Math.random() * maxX));
    const targetY = Math.max(20, Math.floor(Math.random() * maxY));
    companionPet.style.left = `${targetX}px`;
    companionPet.style.top = `${targetY}px`;
}

// Sleeping logic
function toggleSleep() {
    isSleeping = !isSleeping;
    if (isSleeping) {
        const rect = companionPet.getBoundingClientRect();
        companionPet.style.transition = 'none'; companionPet.style.position = 'absolute'; companionPet.style.top = (rect.top + window.scrollY) + 'px';
        companionPet.offsetHeight;
        companionPet.classList.add('sleeping'); motivationBubble.classList.remove('show');
        companionPet.style.transition = 'left 4s cubic-bezier(0.34, 1.56, 0.64, 1), top 4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        companionPet.style.left = '30px'; companionPet.style.top = (window.scrollY + 30) + 'px';
    } else {
        const rect = companionPet.getBoundingClientRect();
        companionPet.style.transition = 'none'; companionPet.style.position = 'fixed';
        companionPet.style.top = (rect.top - window.scrollY) + 'px'; companionPet.style.left = rect.left + 'px';
        companionPet.offsetHeight;
        companionPet.classList.remove('sleeping'); companionPet.style.transition = 'left 5s ease-in-out, top 5s ease-in-out';
        roamPet();
    }
}

// Dragging & Click Distinction Logic
let isDraggingPet = false; let petX, petY, dragStartX, dragStartY;

companionPet.addEventListener('mousedown', (e) => {
    isDraggingPet = true; dragStartX = e.clientX; dragStartY = e.clientY;
    if (isSleeping) toggleSleep(); 
    companionPet.classList.add('grabbing');
    petX = e.clientX - companionPet.getBoundingClientRect().left; petY = e.clientY - companionPet.getBoundingClientRect().top;
});

window.addEventListener('mousemove', (e) => {
    if (isDraggingPet) {
        e.preventDefault();
        let left = e.clientX - petX; let top = e.clientY - petY;
        if (isSleeping) top += window.scrollY;
        left = Math.max(0, Math.min(left, window.innerWidth - companionPet.offsetWidth));
        companionPet.style.left = `${left}px`; companionPet.style.top = `${top}px`;
    }
});

window.addEventListener('mouseup', (e) => {
    if (isDraggingPet) {
        isDraggingPet = false; companionPet.classList.remove('grabbing');
        let dx = Math.abs(e.clientX - dragStartX); let dy = Math.abs(e.clientY - dragStartY);
        if (dx < 5 && dy < 5) toggleSleep();
    }
});

// Tabs change logic
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        stopSpecificAudio(); 
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderTab(button.getAttribute('data-tab'));
    });
});

window.speechSynthesis.onvoiceschanged = () => {};

// --- SECRET ADMIN LOGIC ---
const savedData = localStorage.getItem('persistedVocabData');
if (savedData) { Object.assign(vocabularyData, JSON.parse(savedData)); }

let adminListenTimer = null; let typedKeys = "";
const titleElement = document.querySelector('header h1');

titleElement.addEventListener('click', () => {
    typedKeys = ""; clearTimeout(adminListenTimer);
    adminListenTimer = setTimeout(() => { typedKeys = ""; }, 5000);
});

window.addEventListener('keydown', (e) => {
    if (adminListenTimer) {
        typedKeys += e.key;
        if (typedKeys.endsWith("ADMIN")) {
            clearTimeout(adminListenTimer); typedKeys = ""; openModal('admin-login-modal');
        }
    }
});

function verifyAdmin() {
    const code = document.getElementById('admin-code-input').value;
    if (code === "Alex Jake") {
        document.getElementById('admin-code-input').value = "";
        closeModal('admin-login-modal'); openModal('admin-dashboard-modal');
    } else { alert("Access Denied. Incorrect Passcode."); }
}

function addAdminWord() {
    const subject = document.getElementById('admin-add-subject').value;
    const word = document.getElementById('admin-add-word').value.trim();
    const def = document.getElementById('admin-add-def').value.trim();
    const sent = document.getElementById('admin-add-sent').value.trim();
    if (!word || !def) return alert("Word and Definition are required!");
    const newVocab = { word: word, definition: def, sentence: sent };

    if (vocabularyData[subject] && vocabularyData[subject].length > 0) {
        vocabularyData[subject][0].words.push(newVocab);
    } else {
        vocabularyData[subject] = [{ groupTitle: "Admin Added Words", words: [newVocab] }];
    }
    saveAdminChanges(subject);
    document.getElementById('admin-add-word').value = ""; document.getElementById('admin-add-def').value = ""; document.getElementById('admin-add-sent').value = "";
}

function removeAdminWord() {
    const subject = document.getElementById('admin-rem-subject').value;
    const targetWord = document.getElementById('admin-rem-word').value.trim().toLowerCase();
    if (!targetWord) return alert("Please enter a word to remove.");
    let wordFound = false;

    if (vocabularyData[subject]) {
        vocabularyData[subject].forEach(group => {
            const originalLength = group.words.length;
            group.words = group.words.filter(w => w.word.toLowerCase() !== targetWord);
            if (group.words.length < originalLength) wordFound = true;
        });
    }
    if (wordFound) {
        saveAdminChanges(subject); document.getElementById('admin-rem-word').value = "";
    } else { alert("Word not found in the selected subject."); }
}

function saveAdminChanges(subject) {
    localStorage.setItem('persistedVocabData', JSON.stringify(vocabularyData));
    alert("Database updated successfully!");
    const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-tab');
    if (activeTab === subject) renderTab(subject);
}

// Initial Setup
renderTab('language');
setTimeout(() => { companionPet.classList.add('visible'); roamPet(); roamInterval = setInterval(roamPet, 5000); }, 1000);
