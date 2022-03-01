export type Props = {
  label: string
}

const Textbox: React.FC<Props> = ({ label }) => (
  <div>
    <h1 className="text-5xl font-bold underline bg-gradient-to-r from-cyan-500 to-blue-500">
      {label}
    </h1>
  </div>
)

export default Textbox
