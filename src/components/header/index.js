import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class="body-font bg-gray-800">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	<Link href="/" class="flex title-font font-medium items-center mb-4 md:mb-0">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
		  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
		</svg>
		<span class="ml-3 text-xl text-white">tailblocks</span>
	  </Link>
	  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
		<Link class="mr-5 text-white" activeClassName={style.active} href="/blogs">Blogs</Link>
		<Link class="mr-5 text-white" activeClassName={style.active} href="/contact">Contact me</Link>
	  </nav>
	</div>
  </header>
);

export default Header;
