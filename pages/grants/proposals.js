import { getPostBySlug } from "../../lib/lib";
import BasicPage from "../../components/BasicPage";
import Markdown from "../../components/Markdown";
// new
import Head from "next/head";
import { TableOfContents } from "../../components/TableOfContents";
import Meta from "../../components/Meta";
import Link from "next/link";
import { useState } from "react";
import classnames from "classnames";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SingleColumn from "../../components/SingleColumn";
import Section from "../../components/Section";
import PostPreview from "../../components/PostPreview";
import GrantPreview from "../../components/GrantPreview";

export default function Post({ post, markdown, search }) {
  return <BasicPage post={post} markdown={markdown} search={search} />;
}

export async function getStaticProps() {
  const post = getPostBySlug("/proposals", ["title", "slug", "content"], "/");

  const markdown = await Markdown({ post });

  return {
    props: { post, markdown },
  };
}
