export default function MapLocation() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.4375332568575!2d77.13303757382775!3d20.11578611851164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0e3b7a6ca732b%3A0x54720cd8e5650ee0!2sMother%20Teresa%20College%20of%20Nursing%2C%20GNM%2C%20Washim!5e0!3m2!1sen!2sin!4v1748610195889!5m2!1sen!2sin" width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="College Location Map"
      ></iframe>
    </div>
  )
}
