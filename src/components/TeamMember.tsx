export default function({ data }) {
    const { name, title, description, descriptionExtended, imageUrl, imageSrc, imageAlt } = data;

    return (
        <li className="team-member">
            <div className="team-member__portrait mt-0">
                <a href={imageUrl}>
                    <img src={imageSrc} alt={imageAlt} />
                </a>
            </div>
            <div className="team-member__description">
                <h3 className="team-member__name mt-0 h1">
                    {name}
                    <span className="team-member__title">{title}</span>
                </h3>
                <p>{description}</p>
                <p>{descriptionExtended}</p>
            </div>
        </li>
    );
}
