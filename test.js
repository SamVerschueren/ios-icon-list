import test from 'ava';
import iosIconList from '.';

test('length of result array', t => {
	t.true(iosIconList().length === 20);
});
