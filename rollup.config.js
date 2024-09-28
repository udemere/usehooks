import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs',
			format: 'cjs',
			exports: 'named',
		},
		{
			file: 'dist/index.js',
			format: 'es',
			exports: 'named',
		},
	],
	plugins: [
		nodeResolve(),
		commonjs(), 
		typescript(),
	],
	external: ['react', 'react-dom'],
}
