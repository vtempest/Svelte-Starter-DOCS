<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "$components/utils";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
	bind:this={ref}
	class={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
	{...restProps}
>
	{@render children?.()}
</span>
