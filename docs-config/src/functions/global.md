[Documentation](modules.md) / global

## Account

```ts
type Account = typeof schema.accounts.$inferSelect;
```

Defined in: [src/global.d.ts:20](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L20)

***

## AgentPrompt

```ts
type AgentPrompt = AgentPromptType;
```

Defined in: [src/global.d.ts:9](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L9)

***

## Article

```ts
type Article = typeof schema.articles.$inferSelect;
```

Defined in: [src/global.d.ts:11](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L11)

***

## Chat

```ts
type Chat = typeof schema.chats.$inferSelect;
```

Defined in: [src/global.d.ts:13](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L13)

***

## File

```ts
type File = typeof schema.files.$inferSelect;
```

Defined in: [src/global.d.ts:14](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L14)

***

## Message

```ts
type Message = typeof schema.messages.$inferSelect;
```

Defined in: [src/global.d.ts:12](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L12)

***

## SearchResult

```ts
type SearchResult = SearchResultType;
```

Defined in: [src/global.d.ts:8](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L8)

***

## Session

```ts
type Session = typeof schema.sessions.$inferSelect;
```

Defined in: [src/global.d.ts:19](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L19)

***

## Team

```ts
type Team = typeof schema.teams.$inferSelect;
```

Defined in: [src/global.d.ts:15](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L15)

***

## User

```ts
type User = typeof schema.users.$inferSelect & object;
```

Defined in: [src/global.d.ts:16](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L16)

### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`settings`

</td>
<td>

[`UserSettings`](#usersettings)

</td>
<td>

[src/global.d.ts:17](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L17)

</td>
</tr>
</tbody>
</table>

***

## UserSettings

```ts
type UserSettings = Partial<{
  AutoSummarize: boolean;
  enableQueryExpansion: boolean;
  fontFamily: string;
  fontSize: number;
  frequencyPenalty: number;
  language: string;
  model: string;
  numberTopResultToExtract: number;
  OpenFirstResultInBackgroundTab: boolean;
  OpenFirstResultInSameTab: boolean;
  provider: string;
  providerApiKeys: object[];
  searchEngineDefault: string;
  searchEngines: object[];
  showHeadings: boolean;
  showURLPath: boolean;
  temperature: number;
  theme: string;
  topP: number;
}>;
```

Defined in: [src/global.d.ts:23](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L23)

***

## VerificationToken

```ts
type VerificationToken = typeof schema.verificationTokens.$inferSelect;
```

Defined in: [src/global.d.ts:21](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/global.d.ts#L21)
