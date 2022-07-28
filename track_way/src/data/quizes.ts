import { QuizT } from '../types/models.d';

const quizes = [
	{
		id: '1',
		question: 'What will be the output ?',
		imageUrl:
			'https://raw.githubusercontent.com/deltd3v/track_way/main/track_way/assets/q1.png',
		choices: ["190", "180", "number", "string"],
		answer: ["string"]
		// choices: [],
		// answers: [],
	},
	{
		id: '2',
		question: 'Which of these is true ?',
		// imageUrl: "https://raw.githubusercontent.com/deltd3v/track_way/main/track_way/assets/q1.png",
		content: `# **This is some *bold* text**
\`\`\` js
	const msg = "Hello World"
	console.log(msg) // Hello World
\`\`\`
	`,
		choices: ["true", "false"],
		answers: ["true"],
	},
] as QuizT[];

export default quizes;
