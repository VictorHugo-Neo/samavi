FROM node:22-alpine
WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=4322
EXPOSE 4322

CMD ["node", "./dist/server/entry.mjs"]