# Task Board Project

## プロジェクト概要

タスク管理ボードアプリケーション。

## Git 運用ルール

### コード変更時の必須手順

コードを変更するたびに、以下の手順を必ず実行する：

1. 変更内容を確認する
   ```
   git status
   git diff
   ```

2. 変更ファイルをステージングする
   ```
   git add <変更したファイル>
   ```

3. コミットメッセージは日本語または英語で変更内容を簡潔に記述する
   ```
   git commit -m "変更内容の説明"
   ```

4. **必ず GitHub にプッシュする**
   ```
   git push origin <ブランチ名>
   ```

### ブランチ戦略

- `main` ブランチ: 本番相当の安定したコード
- 機能追加・バグ修正は feature ブランチを切って作業する
- PR を通じて `main` にマージする

### コミットメッセージのルール

- 変更の種類をプレフィックスとして付ける
  - `feat:` 新機能
  - `fix:` バグ修正
  - `refactor:` リファクタリング
  - `docs:` ドキュメント変更
  - `test:` テスト追加・修正
  - `chore:` ビルド・設定変更

### 禁止事項

- `--force` / `--force-with-lease` を `main` ブランチに使わない
- `--no-verify` でフックをスキップしない
- `.env` などの機密情報をコミットしない

## 開発環境

```bash
npm run dev      # 開発サーバー起動 (http://localhost:5173)
npm run build    # 本番ビルド (dist/ に出力)
npm run preview  # ビルド結果をローカルでプレビュー
```

## 技術スタック

| 用途 | 技術 |
|------|------|
| UI ライブラリ | React 19 |
| ビルドツール | Vite 8 |
| 言語 | JavaScript (JSX) |
| スタイリング | CSS (コンポーネントごとに `.css` ファイルを同梱) |
| データ永続化 | localStorage |
| CI/CD | GitHub Actions |

## デプロイ先

https://tmm7w7c.github.io/task-board/

`main` ブランチへの push で GitHub Actions が自動的にビルド・デプロイする。

## コンポーネントの命名規約

- **ファイル名**: PascalCase（例: `TaskItem.jsx`）
- **コンポーネント名**: ファイル名と一致させる（例: `function TaskItem()`）
- **CSS ファイル**: コンポーネントと同名（例: `TaskItem.css`）
- **CSS クラス名**: kebab-case（例: `.task-item`, `.add-btn`）
- **props / 変数名**: camelCase（例: `onDelete`, `isCompleted`）
- **イベントハンドラ**: `handle` プレフィックス（例: `handleKeyDown`, `handleSubmit`）
