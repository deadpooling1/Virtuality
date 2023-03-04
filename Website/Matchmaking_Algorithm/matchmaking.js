const user = {
    age: 28,
    gender: 'female',
    interests: ['hiking', 'reading', 'travel'],
    location: 'New York',
    ...
  }
  
  const weights = {
    age: 3,
    gender: 1,
    interests: 2,
    location: 4,
    ...
  }
  
  function calculateMatchScore(user, weights) {
    let score = 0;
    for (const [criterion, weight] of Object.entries(weights)) {
      if (criterion === 'interests') {
        // Compare the user's interests to the potential match's interests
        const commonInterests = user.interests.filter(i => potentialMatch.interests.includes(i));
        score += commonInterests.length * weight;
      } else {
        // Compare the user's response to the potential match's response
        if (user[criterion] === potentialMatch[criterion]) {
          score += weight;
        }
      }
    }
    return score;
  }
  