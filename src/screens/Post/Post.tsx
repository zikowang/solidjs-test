/** @format */

import { Link, useParams } from "solid-app-router";
import { Component, createEffect, createResource, For, Show } from "solid-js";

import { PostModel, CommentModel } from "../../interfaces/post";

const Posts: Component = () => {
  const params = useParams();

  const [post] = createResource<PostModel>(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) => res.json()),
    {
      initialValue: null,
    }
  );

  const [comments] = createResource<CommentModel[]>(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then((res) =>
        res.json()
      ),
    {
      initialValue: [],
    }
  );

  return (
    <div>
      <div class="py-2">
        <Show when={!post.loading} fallback={<div>Loading Post</div>}>
          <>
            <h1>Post</h1>
            <div class="mb-10">
              <Link href="/posts" class="font-bold">
                back
              </Link>
            </div>
            <div class="my-5 p-5 bg-gray-500">
              <div class="font-bold mb-5">{post()?.title}</div>
              <div class="italic">{post()?.body}</div>
            </div>
          </>
        </Show>
        <Show when={!comments.loading} fallback={<div>Loading Comments</div>}>
          <>
            <h2>Comments</h2>
            <For each={comments()}>
              {(comment) => (
                <div class="my-5 p-5 bg-gray-700">
                  <div class="font-bold">{comment.name}</div>
                  <div class="italic mt-5">{comment.body}</div>
                  <div class="text-xs mt-2">{comment.email}</div>
                </div>
              )}
            </For>
          </>
        </Show>
      </div>
    </div>
  );
};

export default Posts;
