<script lang="ts">
	import { Pagination as PaginationPrimitive } from "bits-ui";
	import ChevronLeft from "@lucide/svelte/icons/chevron-left";
	import { cn } from "$components/utils";
	import { buttonVariants } from "$lib/components/ui/button/index.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<span>Previous</span>
	<ChevronLeft />
{/snippet}

<PaginationPrimitive.PrevButton
	bind:ref
	{...restProps}
	class={cn(buttonVariants({ variant: "ghost", className: "gap-1 pl-2.5" }), className)}
	children={children || Fallback}
/>
