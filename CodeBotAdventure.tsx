
import React, { useState } from "react";
import {
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  Settings,
  X,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  HelpCircle,
  Globe,
} from "lucide-react";

type Position = { x: number; y: number };

type Level = {
  title: string;
  story: string;
  concept: string;
  goal: string;
  hint: string;
  check: (c: string) => boolean;
  gridSize: number;
  target: Position;
};

type Translation = {
  title: string;
  level: string;
  concept: string;
  goal: string;
  showHint: string;
  hideHint: string;
  grid: string;
  writeCode: string;
  run: string;
  quickRef: string;
  variables: string;
  conditions: string;
  loops: string;
  functions: string;
  success: string;
  error: string;
  victory: string;
  settings: string;
  language: string;
  mode: string;
  dark: string;
  light: string;
  music: string;
  help: string;
  close: string;
  levels: Level[];
};

type Translations = {
  en: Translation;
  fr: Translation;
};

const CodeBotAdventure: React.FC = () => {
  const [level, setLevel] = useState<number>(0);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [robotPos, setRobotPos] = useState<Position>({ x: 0, y: 0 });
  const [score, setScore] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [musicOn, setMusicOn] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const translations: Translations = {
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
      victory:
        "🎉 VICTORY! You've mastered basic programming concepts!",
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
          story:
            "🤖 CodeBot wakes up in an unknown world. He needs to learn how to move!",
          concept: "Variables & Commands",
          goal: "Make CodeBot move forward 3 steps",
          hint: "Use: forward(3)",
          check: (c: string) =>
            c.includes("forward") &&
            (c.includes("3") || c.includes("three")),
          gridSize: 5,
          target: { x: 3, y: 0 },
        },
        // ... keep your other levels here (same as before)
      ],
    },
    fr: {
      // French translation (same structure as English)
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
      victory:
        "🎉 VICTOIRE ! Tu maîtrises les concepts de base de la programmation !",
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
          story:
            "🤖 CodeBot se réveille dans un monde inconnu. Il doit apprendre à bouger !",
          concept: "Variables & Commandes",
          goal: "Fais avancer CodeBot de 3 pas",
          hint: "Utilise: avancer(3)",
          check: (c: string) =>
            c.includes("avancer") &&
            (c.includes("3") || c.includes("trois")),
          gridSize: 5,
          target: { x: 3, y: 0 },
        },
        // ... other French levels here
      ],
    },
  };

  const t = translations[language];
  const currentLevel: Level = t.levels[level];

  // ... the rest of your code (unchanged) ...
};

export default CodeBotAdventure;