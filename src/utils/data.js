let notes = [
	{
		id: 1,
		title: 'Babel',
		body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 2,
		title: 'Functional Component',
		body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 3,
		title: 'Modularization',
		body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 4,
		title: 'Lifecycle',
		body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 5,
		title: 'ESM',
		body: '<p>Ini adalah <strong>contoh nilai string</strong> yang berada di dalam state body</p>',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 6,
		title: 'Module Bundler',
		body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false
	},
	{
		id: 7,
		title: 'Apa Itu HTML',
		body: 'HTML adalah singkatan dari Hypertext Markup Language, yaitu bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web..',
		createdAt: '2022-05-14T04:27:34.572Z',
		archived: true
	},
	{
		id: 8,
		title: 'Apa Itu CSS',
		body: 'CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan CSS, Anda bisa mengatur jenis font, warna tulisan, dan latar belakang halaman.',
		createdAt: '2022-05-14T04:27:34.572Z',
		archived: true
	},
	{
		id: 9,
		title: 'Apa Itu PHP',
		body: '<h3>This is heading 3</h3>.',
		createdAt: '2022-05-14T04:27:34.572Z',
		archived: true
	}
];

const showFormattedDate = (date, localeOption = 'ID') => {
	let formatDate;
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	if (localeOption === 'EN') {
		formatDate = 'en-GB';
	} else {
		formatDate = 'id-ID';
	}
	// @ts-ignore
	return new Date(date).toLocaleDateString(formatDate, options);
};

const getNotes = () => {
	return notes;
};

function getNotesDetail(id) {
	if (!id) {
		return null;
	}

	const filteredNotes = notes.filter(note => note.id === id);

	if (!filteredNotes.length) {
		return null;
	}

	return filteredNotes[0];
}

const addNote = ({ noteTitle, noteBodyTextArea }) => {
	notes = [
		...notes,
		{
			id: +new Date(),
			createdAt: new Date().toISOString(),
			archived: false,
			title: noteTitle,
			body: noteBodyTextArea
		}
	];
};

const deleteNote = id => {
	notes = notes.filter(note => note.id !== id);
};

const archiveNote = id => {
	notes = notes.map(note => {
		if (note.id === id) {
			note.archived = !note.archived;
		}
		return note;
	});
};

export { getNotes, getNotesDetail, addNote, deleteNote, archiveNote, showFormattedDate };
