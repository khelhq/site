'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Twitter, MessageSquare, Phone, Globe, Shield, Scale } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Platform',
		links: [
			{ title: 'Work', href: '/#work', icon: Globe },
			{ title: 'Services', href: '/#services', icon: Globe },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'LinkedIn', href: '#', icon: Linkedin },
			{ title: 'Twitter', href: '#', icon: Twitter },
			{ title: 'WhatsApp', href: 'https://wa.me/233558161835', icon: MessageSquare },
			{ title: 'Call', href: 'tel:+233558161835', icon: Phone },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '/privacy', icon: Shield },
			{ title: 'Terms of Services', href: '/terms', icon: Scale },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-neutral-900 bg-[radial-gradient(35%_128px_at_50%_0%,theme(colors.neutral.950/80%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-[#dcf594]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 text-neutral-300">
				<AnimatedContainer className="space-y-6">
					{/* Custom Khel rotated-mark SVG Logo */}
					<div className="flex items-center gap-3 group cursor-pointer">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-transform duration-500 group-hover:rotate-12">
							<path d="M6 3v18" />
							<path d="M18 6l-9 6 9 6" />
						</svg>
						<span className="font-medium text-white tracking-tight text-[19px]">Khel.</span>
					</div>

					{/* Original Footer Description */}
					<p className="text-neutral-400 max-w-xs text-sm leading-[1.6] font-light">
						Solving the complicated, elevating the unique. We don't just build; we invest knowledge to transcend expectations.
					</p>

					<p className="text-neutral-500 text-xs mt-8">
						© {new Date().getFullYear()} Khel Technologies. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs uppercase font-semibold tracking-widest text-neutral-500 mb-6">{section.label}</h3>
								<ul className="text-neutral-400 space-y-3 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-white inline-flex items-center transition-all duration-300 gap-2"
											>
												{link.icon && <link.icon className="size-4 text-neutral-500 group-hover:text-white transition-colors" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
