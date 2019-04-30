const Immutable = require('immutable');

const tomHardyMovies = Immutable.List([
		'The Dark Knight Rises',
		'Mad Max: Fury Road',
		'The Revenant',
		'Dunkirk'
]);

//can't directly mutate this directly as below
tomHardyMovies.push('Venom');
console.log(tomHardyMovies); //won't work

const tomHardyMoviesMutated = tomHardyMovies.push('Venom');
console.log(tomHardyMovies); //still the same
console.log(tomHardyMoviesMutated); //now the changes

//this won't work as well
tomHardyMovies[2] = 'Mad Max: The Wasteland';
console.log(tomHardyMovies);

//use .set to mutate at a particular index
const tomHardyMoviesUpdated = tomHardyMoviesMutated.set(
	2, 'Mad Max: The Wasteland'
);

console.log(tomHardyMoviesMutated);
console.log(tomHardyMoviesUpdated);
