import { promises as fs } from 'fs';
import sassVars from 'get-sass-vars';

(async () => {
	const css = await fs.readFile('./index.scss', 'utf-8');
	const json = await sassVars(css);
	console.log(json);
	/* {
		"$foo": "16px",
		"$bar": "17.6px",
		"$baz": 42,
		"$foo-bar": "#666",
		"$foo-bar-baz": "#262626",
		"$foo-bar-baz-bad": "#123",
		"$grault": [1, 2, "3", "4px", "42%", "1.23457px", [4, 5, 6], {"foo": "bar baz"}],
		"$garply": {"foo": 1, "bar": [2, 3], "baz": "3 3 3"},
		"$qux": false,
		"$fred": true,
		"$corgle": null
	} */
})();