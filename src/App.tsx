import React from 'react';
import {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Img,
  Label,
  RadioButton,
  Table,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text,
} from './components';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section style={{ margin: '2rem 0' }}>
    <h2>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
      {children}
    </div>
  </section>
);

function App() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>kopparthi_jashwanth UI Garden</h1>
      <p>
        A React + TypeScript component library built with styled-components and documented in
        Storybook. Every component has a default and a disabled state.
      </p>

      <HeroImage title="Welcome to the UI Garden" subtitle="Reusable, responsive components" />

      <Section title="Button">
        <Button label="Default" />
        <Button label="Disabled" disabled />
      </Section>

      <Section title="Label and Text">
        <Label text="Default label" />
        <Label text="Disabled label" disabled />
        <Text text="Default text" />
        <Text text="Disabled text" disabled />
      </Section>

      <Section title="Dropdown and Radio button">
        <Dropdown placeholder="Choose a fruit" />
        <Dropdown placeholder="Disabled" disabled />
        <RadioButton label="Option A" name="demo" value="a" checked />
        <RadioButton label="Option B" name="demo" value="b" />
        <RadioButton label="Disabled" name="demo-disabled" value="c" disabled />
      </Section>

      <Section title="Img">
        <Img width={240} />
        <Img width={240} disabled />
      </Section>

      <Section title="Card">
        <Card title="Default card" description="Cards group related content." />
        <Card title="Disabled card" description="Greyed out and not interactive." disabled />
      </Section>

      <Section title="Table">
        <Table caption="Team members">
          <TableHeader columns={['Name', 'Role', 'City']} />
          <tbody>
            <TableRow>
              <TableCell>Ada</TableCell>
              <TableCell>Engineer</TableCell>
              <TableCell>London</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Grace</TableCell>
              <TableCell>Admiral</TableCell>
              <TableCell>New York</TableCell>
            </TableRow>
          </tbody>
          <TableFooter text="2 members" colSpan={3} />
        </Table>
      </Section>
    </main>
  );
}

export default App;
