function createDynamicStory() {
  // Collecting User informatiom
  let name = prompt("What's your name: ");
  let gender = prompt("Enter your Gender here: ");
  let age = parseInt(prompt("How old are you?: "));
  let storyName = prompt("Story Name: ");

  // Creating the story
  let storyIntro = `For it is as if a man, going on a journey, summoned his slaves and entrusted his property to them; to one he gave five talents,f to another two, to another one, to each according to his ability.`;
  let storyBody = `Then he went away. The one who had received the five talents went off at once and traded with them, and made five more talents. In the same way, the one who had the two talents made two more talents. But the one who had received the one talent went off and dug a hole in the ground and hid his master’s money.`;

  // Adding user infor with the story using template literals
  let fullStory = `My name is ${name} I am ${age} years old. The title of my story is ${storyName}. ${storyIntro}  ${storyBody}`;

  // Storing the results in a varaible and returning the results
  let result = alert(fullStory);
  return result;
}
createDynamicStory();
