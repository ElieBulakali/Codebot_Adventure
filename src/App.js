import React, { useState } from 'react';
import { Play, RotateCcw, Sparkles, Zap, Settings, X, Volume2, VolumeX, Moon, Sun, HelpCircle, Globe } from 'lucide-react';

const CodeBotAdventure = () => {
  const [level, setLevel] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [robotPos, setRobotPos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const translations = {
    en: {
      title: "CodeBot Adventure",
      level: "Level",
      concept: "Concept",
      goal: "Goal",
      showHint: "Show Hint",
      hideHint: "Hide Hint",
      grid: "Game Grid",
      writeCode: "Write Your Code",
      run: "Run",
      quickRef: "Quick Reference",
      variables: "Variables: name = value",
      conditions: "Conditions: if condition: action",
      loops: "Loops: for i from 1 to N: action",
      functions: "Functions: function name(): actions",
      success: "✅ Great! CodeBot understood your logic!",
      error: "🤔 Hmm, that's not quite right. Try again!",
      victory: "🎉 VICTORY! You've mastered basic programming concepts!",
      settings: "Settings",
      language: "Language",
      mode: "Mode",
      dark: "Dark",
      light: "Light",
      music: "Music",
      help: "Help",
      close: "Close",
      levels: [
        {
          title: "The First Command",
          story: "🤖 CodeBot wakes up in an unknown world. He needs to learn how to move!",
          concept: "Variables & Commands",
          goal: "Make CodeBot move forward 3 steps",
          hint: "Use: forward(3)",
          check: (c) => c.includes('forward') && (c.includes('3') || c.includes('three')),
          gridSize: 5,
          target: { x: 3, y: 0 }
        },
        {
          title: "The Path Choice",
          story: "🌳 CodeBot arrives at a fork. He must choose his path based on a condition.",
          concept: "Conditions (if/else)",
          goal: "If path='left', turn left, otherwise turn right",
          hint: "Use: if path == 'left': turn('left')",
          check: (c) => (c.includes('if')) && (c.includes('==') || c.includes('equal')),
          gridSize: 5,
          target: { x: 0, y: 2 }
        },
        {
          title: "The Repeated Crossing",
          story: "🌉 A long bridge to cross! CodeBot won't repeat the same command 10 times...",
          concept: "Loops (for/while)",
          goal: "Move forward 5 times with a loop",
          hint: "Use: for i from 1 to 5: forward(1)",
          check: (c) => (c.includes('for') || c.includes('while')) && c.includes('5'),
          gridSize: 7,
          target: { x: 5, y: 0 }
        },
        {
          title: "The Magic Function",
          story: "✨ CodeBot discovers he can create his own reusable spells!",
          concept: "Functions",
          goal: "Create a jump() function that does forward(2)",
          hint: "Use: function jump(): forward(2)",
          check: (c) => (c.includes('function') || c.includes('def')) && c.includes('jump'),
          gridSize: 5,
          target: { x: 4, y: 0 }
        },
        {
          title: "The Final Treasure",
          story: "💎 Combine everything you've learned to reach the treasure!",
          concept: "Integration",
          goal: "Use loops, conditions AND functions",
          hint: "Be creative! Combine all concepts.",
          check: (c) => c.length > 30 && (c.includes('for')) && (c.includes('if')),
          gridSize: 6,
          target: { x: 5, y: 5 }
        }
      ]
    },
    fr: {
      title: "CodeBot Aventure",
      level: "Niveau",
      concept: "Concept",
      goal: "Objectif",
      showHint: "Afficher l'indice",
      hideHint: "Cacher l'indice",
      grid: "Grille de jeu",
      writeCode: "Écris ton code",
      run: "Exécuter",
      quickRef: "Aide-mémoire",
      variables: "Variables: nom = valeur",
      conditions: "Conditions: si condition: action",
      loops: "Boucles: pour i de 1 à N: action",
      functions: "Fonctions: fonction nom(): actions",
      success: "✅ Bravo ! CodeBot a compris ta logique !",
      error: "🤔 Hmm, ce n'est pas tout à fait ça. Réessaie !",
      victory: "🎉 VICTOIRE ! Tu maîtrises les concepts de base de la programmation !",
      settings: "Paramètres",
      language: "Langue",
      mode: "Mode",
      dark: "Sombre",
      light: "Clair",
      music: "Musique",
      help: "Aide",
      close: "Fermer",
      levels: [
        {
          title: "La Première Commande",
          story: "🤖 CodeBot se réveille dans un monde inconnu. Il doit apprendre à bouger !",
          concept: "Variables & Commandes",
          goal: "Fais avancer CodeBot de 3 pas",
          hint: "Utilise: avancer(3)",
          check: (c) => c.includes('avancer') && (c.includes('3') || c.includes('trois')),
          gridSize: 5,
          target: { x: 3, y: 0 }
        },
        {
          title: "Le Choix du Chemin",
          story: "🌳 CodeBot arrive à une bifurcation. Il doit choisir son chemin selon une condition.",
          concept: "Conditions (if/else)",
          goal: "Si chemin='gauche', tourne à gauche, sinon à droite",
          hint: "Utilise: si chemin == 'gauche': tourner('gauche')",
          check: (c) => (c.includes('si')) && (c.includes('==') || c.includes('égal')),
          gridSize: 5,
          target: { x: 0, y: 2 }
        },
        {
          title: "La Traversée Répétée",
          story: "🌉 Un long pont à traverser ! CodeBot ne va pas répéter la même commande 10 fois...",
          concept: "Boucles (for/while)",
          goal: "Avance 5 fois avec une boucle",
          hint: "Utilise: pour i de 1 à 5: avancer(1)",
          check: (c) => (c.includes('pour') || c.includes('tant que')) && c.includes('5'),
          gridSize: 7,
          target: { x: 5, y: 0 }
        },
        {
          title: "La Fonction Magique",
          story: "✨ CodeBot découvre qu'il peut créer ses propres sorts réutilisables !",
          concept: "Fonctions",
          goal: "Crée une fonction saut() qui fait avancer(2)",
          hint: "Utilise: fonction saut(): avancer(2)",
          check: (c) => (c.includes('fonction') || c.includes('def')) && c.includes('saut'),
          gridSize: 5,
          target: { x: 4, y: 0 }
        },
        {
          title: "Le Trésor Final",
          story: "💎 Combine tout ce que tu as appris pour atteindre le trésor !",
          concept: "Intégration",
          goal: "Utilise boucles, conditions ET fonctions",
          hint: "Sois créatif ! Combine tous les concepts.",
          check: (c) => c.length > 30 && (c.includes('pour')) && (c.includes('si')),
          gridSize: 6,
          target: { x: 5, y: 5 }
        }
      ]
    }
  };

  const t = translations[language];
  const currentLevel = t.levels[level];

  const helpContent = {
    en: {
      title: "How to Play CodeBot Adventure",
      description: "CodeBot Adventure is an educational game that teaches programming concepts through interactive storytelling. Help CodeBot navigate through different levels by writing code!",
      sections: [
        {
          title: "📖 Game Concept",
          content: "You control CodeBot, a friendly robot exploring a mysterious world. At each level, you'll learn a new programming concept and help CodeBot solve challenges by writing simple code."
        },
        {
          title: "🎮 How to Play",
          content: "1. Read the story and objective for each level\n2. Write your code in the editor\n3. Click 'Run' to execute your code\n4. Watch CodeBot move on the grid\n5. If successful, advance to the next level!"
        },
        {
          title: "💡 Programming Concepts",
          content: "Level 1: Variables & Commands - Learn basic instructions\nLevel 2: Conditions - Make decisions with if/else\nLevel 3: Loops - Repeat actions efficiently\nLevel 4: Functions - Create reusable code blocks\nLevel 5: Integration - Combine everything!"
        },
        {
          title: "🎯 Tips",
          content: "• Use the hint button if you're stuck\n• Watch the grid to see CodeBot's position\n• You can write in pseudo-code (English or French)\n• Be creative - there are multiple solutions!"
        }
      ]
    },
    fr: {
      title: "Comment jouer à CodeBot Aventure",
      description: "CodeBot Aventure est un jeu éducatif qui enseigne les concepts de programmation à travers une narration interactive. Aide CodeBot à naviguer à travers différents niveaux en écrivant du code !",
      sections: [
        {
          title: "📖 Concept du jeu",
          content: "Tu contrôles CodeBot, un robot sympathique explorant un monde mystérieux. À chaque niveau, tu apprendras un nouveau concept de programmation et aideras CodeBot à résoudre des défis en écrivant du code simple."
        },
        {
          title: "🎮 Comment jouer",
          content: "1. Lis l'histoire et l'objectif de chaque niveau\n2. Écris ton code dans l'éditeur\n3. Clique sur 'Exécuter' pour lancer ton code\n4. Regarde CodeBot bouger sur la grille\n5. Si réussi, passe au niveau suivant !"
        },
        {
          title: "💡 Concepts de programmation",
          content: "Niveau 1 : Variables & Commandes - Apprends les instructions de base\nNiveau 2 : Conditions - Prends des décisions avec if/else\nNiveau 3 : Boucles - Répète des actions efficacement\nNiveau 4 : Fonctions - Crée des blocs de code réutilisables\nNiveau 5 : Intégration - Combine tout !"
        },
        {
          title: "🎯 Conseils",
          content: "• Utilise le bouton indice si tu es bloqué\n• Regarde la grille pour voir la position de CodeBot\n• Tu peux écrire en pseudo-code (français ou anglais)\n• Sois créatif - il y a plusieurs solutions !"
        }
      ]
    }
  };

  const runCode = () => {
    if (currentLevel.check(code.toLowerCase())) {
      setOutput(t.success);
      setRobotPos(currentLevel.target);
      setScore(score + 100);
      setTimeout(() => {
        if (level < t.levels.length - 1) {
          setLevel(level + 1);
          setCode('');
          setOutput('');
          setRobotPos({ x: 0, y: 0 });
          setShowHint(false);
        } else {
          setOutput(t.victory);
        }
      }, 2000);
    } else {
      setOutput(t.error);
    }
  };

  const reset = () => {
    setCode('');
    setOutput('');
    setRobotPos({ x: 0, y: 0 });
  };

  const bgClass = darkMode 
    ? "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" 
    : "bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-200";
  
  const panelClass = darkMode 
    ? "bg-white bg-opacity-10 backdrop-blur-lg text-white" 
    : "bg-white bg-opacity-90 backdrop-blur-lg text-gray-900";

  return (
    <div className={`min-h-screen ${bgClass} p-4`}> 
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`${panelClass} rounded-2xl p-6 mb-6`}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Sparkles className="text-yellow-300" />
              {t.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">⭐ {score}</div>
              <button
                onClick={() => setShowSettings(true)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-white bg-opacity-20 hover:bg-opacity-30' : 'bg-gray-200 hover:bg-gray-300'} transition`}
              >
                <Settings size={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            {t.levels.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 rounded ${
                  idx < level ? 'bg-green-400' : idx === level ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Story Panel */}
          <div className={`${panelClass} rounded-2xl p-6`}>
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              {t.level} {level + 1}: {currentLevel.title}
            </h2>
            <div className={`mb-4 p-4 ${darkMode ? 'bg-black bg-opacity-30' : 'bg-gray-100'} rounded-lg`}>
              <p className="text-lg mb-3">{currentLevel.story}</p>
              <p className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} font-semibold`}>
                📚 {t.concept}: {currentLevel.concept}
              </p>
            </div>
            
            <div className={`mb-4 p-4 ${darkMode ? 'bg-blue-500 bg-opacity-20 border-blue-400' : 'bg-blue-100 border-blue-600'} rounded-lg border-2`}>
              <p className="font-bold mb-2">🎯 {t.goal}:</p>
              <p>{currentLevel.goal}</p>
            </div>

            <button
              onClick={() => setShowHint(!showHint)}
              className={`mb-4 px-4 py-2 ${darkMode ? 'bg-yellow-500 bg-opacity-30 hover:bg-opacity-50' : 'bg-yellow-200 hover:bg-yellow-300'} rounded-lg transition`}
            >
              💡 {showHint ? t.hideHint : t.showHint}
            </button>

            {showHint && (
              <div className={`p-4 ${darkMode ? 'bg-green-500 bg-opacity-20 border-green-400' : 'bg-green-100 border-green-600'} rounded-lg border-2`}>
                <p className="text-sm">{currentLevel.hint}</p>
              </div>
            )}

            {/* Grid Visualization */}
            <div className="mt-6">
              <p className="mb-2 font-semibold">{t.grid}:</p>
              <div className="inline-grid gap-1 p-4 bg-black bg-opacity-40 rounded-lg"
                   style={{
                     gridTemplateColumns: `repeat(${currentLevel.gridSize}, minmax(0, 1fr))`
                   }}>
                {Array.from({ length: currentLevel.gridSize * currentLevel.gridSize }).map((_, idx) => {
                  const x = idx % currentLevel.gridSize;
                  const y = Math.floor(idx / currentLevel.gridSize);
                  const isRobot = robotPos.x === x && robotPos.y === y;
                  const isTarget = currentLevel.target.x === x && currentLevel.target.y === y;
                  return (
                    <div
                      key={idx}
                      className={`w-12 h-12 rounded flex items-center justify-center text-2xl ${
                        isRobot ? 'bg-blue-500' : isTarget ? 'bg-yellow-500' : 'bg-gray-700'
                      }`}
                    >
                      {isRobot && '🤖'}
                      {isTarget && '🎯'}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Code Editor Panel */}
          <div className={`${panelClass} rounded-2xl p-6`}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="text-yellow-400" />
              {t.writeCode}
            </h3>
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`${t.writeCode}...`}
              className={`w-full h-64 p-4 ${darkMode ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-green-700'} font-mono rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />

            <div className="flex gap-3 mb-4">
              <button
                onClick={runCode}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition transform hover:scale-105 text-white"
              >
                <Play size={20} />
                {t.run}
              </button>
              <button
                onClick={reset}
                className={`px-6 py-3 ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-400 hover:bg-gray-500'} rounded-lg font-bold transition text-white`}
              >
                <RotateCcw size={20} />
              </button>
            </div>

            {output && (
              <div className={`p-4 rounded-lg ${
                output.includes('✅') || output.includes('🎉')
                  ? darkMode ? 'bg-green-500 bg-opacity-20 border-green-400' : 'bg-green-100 border-green-600'
                  : darkMode ? 'bg-orange-500 bg-opacity-20 border-orange-400' : 'bg-orange-100 border-orange-600'
              } border-2`}>
                <p className="font-semibold">{output}</p>
              </div>
            )}

            {/* Quick Reference */}
            <div className={`mt-6 p-4 ${darkMode ? 'bg-black bg-opacity-40' : 'bg-gray-100'} rounded-lg text-sm`}>
              <p className="font-bold mb-2">📖 {t.quickRef}:</p>
              <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• {t.variables}</li>
                <li>• {t.conditions}</li>
                <li>• {t.loops}</li>
                <li>• {t.functions}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-2xl p-6 max-w-md w-full`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{t.settings}</h2>
              <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-gray-700 rounded-lg">
                <X size={24} />
              </button>
            </div>

            {/* Language */}
            <div className="mb-6">
              <label className="flex items-center gap-2 font-semibold mb-2">
                <Globe size={20} />
                {t.language}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-4 py-2 rounded-lg ${language === 'en' ? 'bg-purple-500 text-white' : darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`flex-1 px-4 py-2 rounded-lg ${language === 'fr' ? 'bg-purple-500 text-white' : darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                >
                  Français
                </button>
              </div>
            </div>

            {/* Mode */}
            <div className="mb-6">
              <label className="flex items-center gap-2 font-semibold mb-2">
                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                {t.mode}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(true)}
                  className={`flex-1 px-4 py-2 rounded-lg ${darkMode ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-900'}`}
                >
                  {t.dark}
                </button>
                <button
                  onClick={() => setDarkMode(false)}
                  className={`flex-1 px-4 py-2 rounded-lg ${!darkMode ? 'bg-purple-500 text-white' : 'bg-gray-700 text-white'}`}
                >
                  {t.light}
                </button>
              </div>
            </div>

            {/* Music */}
            <div className="mb-6">
              <label className="flex items-center gap-2 font-semibold mb-2">
                {musicOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
                {t.music}
              </label>
              <div className