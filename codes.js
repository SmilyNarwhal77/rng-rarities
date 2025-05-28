var codes = [
    {name: "e404", used: false, effect: () => {rarities[rarities.length - 3].owned++}},
    {name: "Wassup", used: false, effect: () => {luck *= 2}},
    {name: "Version1", used: false, effect: () => {autoroll(1000)}},
    {name: "ilovedonuts", used: false, effect: () => {rarities[rarities.length - 2].owned++}},
    {name: "KeeganGaming23YT", used: false, effect: () => {rarities[rarities.length - 1].owned++}},
];
export default codes;
