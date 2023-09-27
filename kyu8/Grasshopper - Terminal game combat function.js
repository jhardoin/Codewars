const combat = (health, damage) => (health - damage >= 0) ? health - damage : 0

const combat = (health, damage) => health > damage ? health - damage : 0