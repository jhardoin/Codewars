const combat = (health, damage) => (health - damage >= 0) ? health - damage : 0

const combat = (health, damage) => health > damage ? health - damage : 0

function combat(health, damage) {
    return health - damage >= 0 ? health - damage : 0
  }