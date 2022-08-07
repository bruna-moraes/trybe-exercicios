const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const year = (
  { winter: [december, january, february],
    spring,
    summer,
    autumn,
  }
) => ( 
  [january, february, ...spring, ...summer, ...autumn, december]
)
console.log(year(yearSeasons));