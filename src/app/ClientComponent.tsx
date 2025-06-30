"use client";
import { Button } from '@/shared/ui/Button';
import React from 'react';

export default function ClientComponent() {
  return (
    <>
      <Button onClick={() => alert(123)} label="Easy. Match words" />

    </>
  );
}
