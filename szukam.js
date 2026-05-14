const listaSzukam = [
    // PvE Shiny
    { id: 214, name: "heracross", category: "pve-shiny", isShiny: true, isLegacy: false, isRegionalGO: true, form: "normal" },
    { id: 636, name: "larvesta", category: "pve-shiny", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 798, name: "kartana", category: "pve-shiny", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 796, name: "xurkitree", category: "pve-shiny", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 361, name: "snorunt", category: "pve-shiny", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },

    // PvE Legacy Attack
    { id: 645, name: "landorus-therian", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "therian" },
    { id: 643, name: "reshiram", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 485, name: "heatran", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 382, name: "kyogre", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 644, name: "zekrom", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 484, name: "palkia-origin", category: "pve-legacy", isShiny: false, isLegacy: true, isRegionalGO: false, form: "origin" },

    // PvE Shiny Legacy
    { id: 464, name: "rhyperior", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 643, name: "reshiram", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 485, name: "heatran", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 260, name: "swampert", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 150, name: "mewtwo", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 384, name: "rayquaza", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },
    { id: 484, name: "palkia-origin", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "origin" },
    { id: 65, name: "alakazam", category: "pve-shiny-legacy", isShiny: true, isLegacy: true, isRegionalGO: false, form: "normal" },

    // PvE Normal
    { id: 793, name: "nihilego", category: "pve-normal", isShiny: false, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 636, name: "larvesta", category: "pve-normal", isShiny: false, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 798, name: "kartana", category: "pve-normal", isShiny: false, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 796, name: "xurkitree", category: "pve-normal", isShiny: false, isLegacy: false, isRegionalGO: false, form: "normal" },

    // Others
    { id: 455, name: "carnivine", category: "others", isShiny: true, isLegacy: false, isRegionalGO: true, form: "normal" },
    { id: 479, name: "rotom", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 773, name: "bombirdier", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 667, name: "litleo", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 688, name: "binacle", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 622, name: "golett", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 948, name: "capsakid", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 969, name: "glimmet", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 978, name: "tatsugiri", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },
    { id: 996, name: "frigibax", category: "others", isShiny: true, isLegacy: false, isRegionalGO: false, form: "normal" },

    // Unown
    { id: 201, name: "b", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "c", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "f", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "j", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "p", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "q", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "t", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "x", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" },
    { id: 201, name: "z", category: "unown", isShiny: true, isLegacy: false, isRegionalGO: false, form: "unown" }
];
